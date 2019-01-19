/* global hexo */
'use strict';

const pagination = require('../util/pagination');

const tag_generator = (locals) => {
  const perPage = hexo.config.tag_generator.per_page;
  const paginationDir = hexo.config.pagination_dir || 'page';
  let tags = locals.tags;
  let tagDir;

  let pages = tags.reduce(function(result, tag) {
    if (!tag.length) return result;

    let posts = tag.posts.sort('-date');
    let data = pagination(tag.path, posts, {
      perPage: perPage,
      layout: ['tag', 'archive', 'index'],
      format: paginationDir + '/%d/',
      data: {
        tag: tag.name
      }
    });

    return result.concat(data);
  }, []);

  // generate tag index page, usually /tags/index.html
  if (hexo.config.tag_generator.enable_index_page) {
    tagDir = hexo.config.tag_dir;
    if (tagDir[tagDir.length - 1] !== '/') {
      tagDir += '/';
    }

    pages.push({
      path: tagDir,
      layout: ['tag-index', 'tag', 'archive', 'index'],
      posts: locals.posts,
      data: {
        base: tagDir,
        total: 1,
        current: 1,
        current_url: tagDir,
        posts: locals.posts,
        prev: 0,
        prev_link: '',
        next: 0,
        next_link: '',
        tags: tags
      }
    });
  }

  return pages;
};

/** hexo-generator-tag */
hexo.config.tag_generator = Object.assign({
  per_page: hexo.config.per_page || 10
}, hexo.config.tag_generator);

hexo.extend.generator.register('tag', tag_generator);
