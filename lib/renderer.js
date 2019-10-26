'use strict';

const adarender = require('adarender');
const hljs = require('highlight.js');

module.exports = function(data, options) {
  const MarkdownIt = require('markdown-it');
  const cfg = this.config.markdown;
  const opt = cfg ? cfg : 'default';
  const parser = new MarkdownIt({
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>'
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' +
        parser.utils.escapeHtml(str) +
        '</code></pre>'
      );
    },
  });
  // let parser =
  //   opt === 'default' || opt === 'commonmark' || opt === 'zero' ?
  //     new MdIt(opt) :
  //     new MdIt(opt.render);

  if (opt.plugins) {
    parser = opt.plugins.reduce((parser, pugs) => {
      if (pugs instanceof Object && pugs.name) {
        return parser.use(require(pugs.name), pugs.options);
      }
      return parser.use(require(pugs));
    }, parser);
  }

  if (opt.anchors) {
    parser = parser.use(require('./anchors'), opt.anchors);
  }

  adarender.registerAllPlugins(parser, {});

  return parser.render(data.text);
};
