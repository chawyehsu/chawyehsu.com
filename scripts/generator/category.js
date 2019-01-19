/* global hexo */
'use strict';

const pagination = require('../util/pagination');

const category_generator = (locals) => {
  const perPage = hexo.config.category_generator.per_page;
  const paginationDir = hexo.config.pagination_dir || 'page';

  return locals.categories.reduce(function(result, category) {
    if (!category.length) return result;

    var posts = category.posts.sort('-date');
    var data = pagination(category.path, posts, {
      perPage: perPage,
      layout: ['category', 'archive', 'index'],
      format: paginationDir + '/%d/',
      data: {
        category: category.name
      }
    });

    return result.concat(data);
  }, []);
};

hexo.config.category_generator = Object.assign({
  per_page: hexo.config.per_page || 10
}, hexo.config.category_generator);

hexo.extend.generator.register('category', category_generator);
