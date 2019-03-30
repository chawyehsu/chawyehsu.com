# Regex to convert hexo-tag-figure element to html

## First

^{%.*?"(.*?)"\ (.+?)\ "(.+?)"\ %}
<figure class="$1">\n  <img\n    data-src="$2"\n    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="\n    alt="$3"\n    title="$3">\n  <figcaption><p>$3</p></figcaption>\n</figure>

## Second

^{%.*?"(.*?)"\ (.+?)\ %}
<figure class="$1">\n  <img\n    data-src="$2"\n    src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=">\n</figure>

## Last

,lazyload
