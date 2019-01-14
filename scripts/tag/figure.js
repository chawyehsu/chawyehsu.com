/* global hexo */
'use strict';

/**
 * Figure image tag
 *
 * Syntax:
 *   {% figure [classes] /path/to/image [width] [height] [title] [alt] %}
 *
 *   e.g.:
 *     {% figure alignleft,fig-img /uploads/test.png 100% 500 "title." 'alt.' %}
 */
const rClass = /^[A-Za-z0-9-_,]+$/;
const rSize = /^\d+(?:|\.\d+)(?:%)?$/;

function buildHtmlTag (tag, attrs, text) {
  let start = `<${tag}`;
  let end = text === null ? '/>' : `>${text}</${tag}>`;

  for (let i in attrs) {
    if (attrs[i]) {
      start += ` ${i}="${attrs[i]}"`;
    }
  }

  return `${start}${end}`;
}

function getFigureTag (args) {
  let classes = '';
  let isLazy = false;
  let src, width, height, title, alt;

  // 1. Find all classes
  if (args.length && rClass.test(args[0])) {
    classes = args.shift().split(',');
    // Detect if class contains lazyload
    if (classes.includes('lazyload')) {
      isLazy = true;
    }
    // Convert to string separated by space
    classes = classes.join(' ');
  }

  // 2. Get image url
  src = args.shift();

  // 3. Find image width and height
  if (args.length) {
    // Get width
    if (rSize.test(args[0])) {
      width = args.shift();
      // and height
      if (args.length && rSize.test(args[0])) {
        height = args.shift();
      }
    }
  }

  // 4. Find image title and alt
  if (args.length) {
    // Get title
    title = args.shift();
    // and alt
    if (args.length) {
      alt = args.shift();
    } else {
      alt = title;
    }
  }

  // Prepare tag attrs
  let figHtml = '<figure';
  let imgAttrs = {
    src: src,
    width: width,
    height: height,
    title: title,
    alt: alt
  };

  console.log(imgAttrs)

  if (classes) {
    figHtml += ` class="${classes}"`;
    if (isLazy) {
      imgAttrs = {
        'data-src': src,
        src: 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=',
        width: width,
        height: height,
        title: title,
        alt: alt
      };
    }
  }

  figHtml += '>' + buildHtmlTag('img', imgAttrs);

  if (title) {
    figHtml += `<figcaption><p>${title}</p></figcaption>`;
  }

  figHtml += '</figure>';

  return figHtml;
}

hexo.extend.tag.register('figure', (args) => {
  return getFigureTag(args);
});
