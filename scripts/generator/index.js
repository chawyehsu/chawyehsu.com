/* global hexo */
'use strict';

const pagination = require('../util/pagination');

/** hexo-generator-index */
hexo.config.index_generator = Object.assign({
  per_page: hexo.config.per_page || 10,
  order_by: '-date'
}, hexo.config.index_generator);

hexo.extend.generator.register('index', (locals) => {
  const posts = locals.posts.sort(hexo.config.index_generator.order_by);
  const paginationDir = hexo.config.pagination_dir || 'page';
  const path = hexo.config.index_generator.path || '';

  return pagination(path, posts, {
    perPage: hexo.config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  })
});
