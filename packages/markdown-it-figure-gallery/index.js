'use strict';

module.exports = function figureGalleryPlugin (md, options) {
  options = Object.assign({
    dataType: false,
    figcaption: false,
    galleryClass: 'md-gallery',
    galleryImageClass: undefined,
    photoswipeIntegration: false,
    schemaAttributes: true,
    wrapImagesInLinks: false
  }, options);

  function tokenAddClass(token, val) {
    const attrClass = token.attrGet('class');
    if (attrClass) {
        token.attrSet('class', `${attrClass} ${val}`);
    } else {
        token.attrSet('class', val);
    }
  }

  function figureGallery (state) {
    const tokens = state.tokens;
    const tokensRange = tokens.length - 1;

    // do not process first and last token
    for (let i = 1; i < tokensRange; ++i) {
      const token = tokens[i];
      const CHILD_TYPES = ['image', 'softbreak'];
      // prerequisites: should be an inline token
      if (token.type !== 'inline') continue;
      // prerequisites: prev token should be paragraph_open
      if (tokens[i - 1].type !== 'paragraph_open') continue;
      // prerequisites: next token should be paragraph_close
      if (!tokens[i + 1] || tokens[i + 1].type !== 'paragraph_close') continue;
      // prerequisites: should have children token(s)
      if (!token.children || !token.children.length) continue;
      // prerequisites: children token(s) should be only of type image and softbreak
      if (!token.children.reduce(
        (prev, curr) => prev && CHILD_TYPES.includes(curr.type), true)
      ) continue;

      // select only image tokens
      const images = token.children.filter(t => t.type === 'image');

      if (images.length === 1) { // condition A: there is only one image
        // replace paragraph token to figure token
        tokens[i - 1].type = 'figure_open';
        tokens[i - 1].tag = 'figure';
        tokens[i + 1].type = 'figure_close';
        tokens[i + 1].tag = 'figure';
        // select the only image
        const image = token.children[0];
        // fix alt
        image.attrSet('alt', image.content);
        // options: use data-type for figure
        if (options.dataType == true) {
          tokens[i - 1].attrPush(['data-type', 'image']);
        }
        // options: wrap images in links
        if (options.wrapImagesInLinks === true) {
          const linkOpen = new state.Token('link_open', 'a', 1);
          linkOpen.attrPush(['href', image.attrGet('src')]);
          linkOpen.attrPush(['target', '_blank']);
          const linkClose = new state.Token('link_close', 'a', -1);

          token.children.unshift(linkOpen);
          token.children.push(linkClose);
        }
        // options: use figcaption
        if (options.figcaption === true) {
          if (image.children && image.children.length) {
            token.children.push(
              new state.Token('figcaption_open', 'figcaption', 1),
              ...image.children,
              new state.Token('figcaption_close', 'figcaption', -1)
              );
          }
        }
        // options: photoswipe integration
        if (options.photoswipeIntegration) {
          // see: https://markdown-it.github.io/markdown-it/#Renderer.renderInlineAsText
          // CAUTION: this is a hack with the internal api, but it works
          const rendered_alt = md.renderer.renderInlineAsText(image.children, options);
          image.attrSet('data-pswp-title', rendered_alt);
          tokens[i - 1].attrPush(['data-pswp', 'true']);
        }
        // options: schema attributes
        if (options.schemaAttributes === true) {
          tokens[i - 1].attrSet('itemscope', '');
          tokens[i - 1].attrSet('itemprop', 'associatedMedia');
          tokens[i - 1].attrSet('itemtype', 'http://schema.org/ImageObject');
        }
      } else { // condition B: there are more than one images, use gallery mode
        // replace paragraph token to gallery container token
        tokens[i - 1].type = 'container_gallery_open';
        tokens[i - 1].tag = 'div';
        tokens[i + 1].type = 'container_gallery_close';
        tokens[i + 1].tag = 'div';

        tokenAddClass(tokens[i - 1], options.galleryClass);
        // options: photoswipe integration
        if (options.photoswipeIntegration) {
          tokens[i - 1].attrPush(['data-pswp', 'true']);
        }
        // options: schema attributes
        if (options.schemaAttributes === true) {
          tokens[i - 1].attrSet('itemscope', '');
          tokens[i - 1].attrSet('itemtype', 'http://schema.org/ImageGallery');
        }

        token.children = images.reduce((t, image) => {
          const figureOpen = new state.Token('figure_open', 'figure', 1);
          const figureClose = new state.Token('figure_close', 'figure', -1);
          // image attributes: fix alt
          image.attrSet('alt', image.content);
          if (options.photoswipeIntegration) {
            const rendered_alt = md.renderer.renderInlineAsText(image.children, options);
            image.attrSet('data-pswp-title', rendered_alt);
          }
          // image attributes: add gallery class
          if (options.galleryImageClass) {
            tokenAddClass(image, options.galleryImageClass);
          }
          // options: use data-type for figure
          if (options.dataType == true) {
            figureOpen.attrPush(['data-type', 'image']);
          }
          // options: schema attributes
          if (options.schemaAttributes === true) {
            figureOpen.attrSet('itemscope', '');
            figureOpen.attrSet('itemprop', 'associatedMedia');
            figureOpen.attrSet('itemtype', 'http://schema.org/ImageObject');
          }

          t.push(figureOpen);
          // options: wrap images in links
          if (options.wrapImagesInLinks === true) {
            const linkOpen = new state.Token('link_open', 'a', 1);
            linkOpen.attrPush(['href', image.attrGet('src')]);
            linkOpen.attrPush(['target', '_blank']);
            const linkClose = new state.Token('link_close', 'a', -1);
            // options: schema attributes
            if (options.schemaAttributes === true) {
              figureOpen.attrSet('itemprop', 'contentUrl');
            }

            t.push(linkOpen, image, linkClose);
          } else {
            t.push(image);
          }
          // options: use figcaption
          if (options.figcaption === true) {
            if (image.children && image.children.length) {
              t.push(
                new state.Token('figcaption_open', 'figcaption', 1),
                ...image.children,
                new state.Token('figcaption_close', 'figcaption', -1)
                );
            }
          }

          t.push(figureClose);

          return t;
        }, []);
      }
    }
  }
  md.core.ruler.before('linkify', 'figure_gallery', figureGallery);
};
