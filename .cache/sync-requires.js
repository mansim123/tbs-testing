
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/manuelyemoh/Desktop/tbs/tbs-testing/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/manuelyemoh/Desktop/tbs/tbs-testing/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/manuelyemoh/Desktop/tbs/tbs-testing/src/pages/index.tsx"))
}

