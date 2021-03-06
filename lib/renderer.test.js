'use strict';

const render = require('./renderer');
const fs = require('fs');

test('adarender', () => {
  const resultsucess = fs.readFileSync('./test/adarender.html', 'utf8');
  const source = fs.readFileSync('./test/adarender.md', 'utf8');
  const ctx = {
    config: {},
  };
  const parse = render.bind(ctx);
  const result = parse({
    text: source,
  });

  // fs.writeFileSync('./test/adarender.html', result, 'utf8');

  expect(result).toBe(resultsucess);
});
