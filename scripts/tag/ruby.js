/* global hexo */
'use strict';

/**
 * Ruby character tag
 *
 * Syntax:
 *   {% ruby base|text %}
 *
 *   e.g.:
 *     {% ruby 注音|zhùyīn %}
 *     {% ruby 超電磁砲|レールガン %}
 */
hexo.extend.tag.register('ruby', (args) => {
  const split = args.join(' ').split('|');
  const origin = split[0].trim();
  const ruby = split[1].trim();

  return `<ruby><rb>${origin}</rb><rp>(</rp><rt>${ruby}</rt><rp>)</rp></ruby>`;
});
