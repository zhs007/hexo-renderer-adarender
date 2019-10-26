# hexo-renderer-adarender

markdown-it & adarender plugin for hexo.

### Installation

```bash
npm un hexo-renderer-marked --save
```

```bash
npm i hexo-renderer-adarender --save
```

You need add this code into head.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/highlight.js/9.1.0/styles/github.min.css"
/>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"
></script>
```

### Test

We use jest.

You need install jest.

```bash
npm i jest -g
```

And then, you can run test.

```bash
npm test
```
