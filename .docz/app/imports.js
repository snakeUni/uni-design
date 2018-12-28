export const imports = {
  'demo/home-page.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "demo-home-page" */ 'demo/home-page.mdx'),
}
