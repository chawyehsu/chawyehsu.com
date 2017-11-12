<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="utf-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8"/>
  <title>XML Sitemap</title>
  <style>body{font-family:Lucida Grande,Lucida Sans Unicode,Tahoma,Verdana,Arial,sans-serif;font-size:13px;color:#545353}table{width:100%;border:none;border-collapse:collapse}#content{margin:0 auto}a{color:#000;text-decoration:none}a:visited{olor:#777}a:hover{text-decoration:underline}td,th{font-size:11px}th{text-align:left;padding-right:30px}thead th{border-bottom:1px solid #000;cursor:pointer}</style>
</head>
<body>
<div id="content">
  <h1>XML Sitemap</h1>
  <p>The sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>			
  <table cellpadding="5">
    <thead>
      <tr>
        <th width="70%">URL</th>
		<th width="10%">Priority</th>
		<th width="10%">Change Frequency</th>
		<th width="10%">Last Change</th>
	  </tr>
	</thead>
	<tbody>
	  <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
	  <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
	  <xsl:for-each select="sitemap:urlset/sitemap:url">
	  <tr>
	    <td>
		  <xsl:variable name="itemURL">
		  <xsl:value-of select="sitemap:loc"/>
		  </xsl:variable>
		  <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
		</td>
		<td>
		  <xsl:value-of select="concat(sitemap:priority*100,'%')"/>
		</td>
		<td>
		  <xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
		</td>
		<td>
		  <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
		</td>
	  </tr>
	  </xsl:for-each>
	</tbody>
  </table>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
