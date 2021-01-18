// copy from: https://github.com/markdown-it/markdown-it/blob/c8f5f7a352e732b466e48df8ff5d420239d5215d/lib/common/utils.js
var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

// see: https://github.com/markdown-it/markdown-it/pull/652
function isNil(v) { return v === null || typeof v === 'undefined'; }

/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
module.exports = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    var value = token.attrs[i][1];
    result += ' ' + escapeHtml(token.attrs[i][0]) + (isNil(value) ? '' : '="' + escapeHtml(value) + '"');
  }

  return result;
};
