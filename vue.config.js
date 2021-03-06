// 参考文档地址：https://cli.vuejs.org/zh/config/
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
    // alias 配置
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 生产环境
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]', // 提示示compression-webpack-plugin@3.0.0的话asset改为filename
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
        } else {
            // 开发环境

        }
    },
    /**
     * Name : baseUrl(已经过时，请使用publicPath代替)
     * 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
     * Type: string
     * Default: '/'
     * baseUrl: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
     */
    // baseUrl: './',
    /**
     *  Name: publicPath
     * 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，
     * 但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 publicPath
     *  而不要直接修改 webpack 的 output.publicPath。
     * 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，
     * 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，
     * 你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在
     * https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
     * 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，
     * 这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，
     * 也可以用在类似 Cordova hybrid 应用的文件系统中。
     * 相对 publicPath 的限制
     * 相对路径的 publicPath 有一些使用上的限制。在以下情况下，应当避免使用相对
     * publicPath:当使用基于 HTML5 history.pushState 的路由时；
     * 当使用 pages 选项构建多页面应用时。
     * 这个值在开发环境下同样生效。如果你想把开发服务器架设在根路径，你可以使用一个条件式的值：
     * module.exports = {
     *  publicPath: process.env.NODE_ENV === 'production'
     *      ? '/production-sub-path/'
     *      : '/'
     *  }
     *  Type: string
     *  Default: '/'
     */
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    /**
     * Name : outputDir
     * 当运行 vue-cli-service build ( npm run build ) 时生成的生产环境构建文件的目录。
     * 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
     * 请始终使用 outputDir 而不要修改 webpack 的 output.path
     * Type: string
     * Default: 'dist'
     */
    outputDir: 'dist',
    /**
     * Name : assetsDir
     * 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
     * 从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略。
     * Type: string
     * Default: ''
     * eg : './bbb'；bbb文件夹在dist文件夹下，里面包含：css、img、js
     */
    assetsDir: '',
    /**
     * Name : indexPath
     * 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
     * Type: string
     * Default: 'index.html'
     * 生产环境index.html的目录结构
     */
    indexPath: 'index.html',
    /**
     * Name : filenameHashing
     * 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
     * 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用
     * Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希
     * Type: boolean
     * Default: true
     */
    filenameHashing: true,
    /**
     * Name : pages
     * 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
     * 其值应该是一个对象，对象的 key 是入口的名字，value 是：
     * a:一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
     * b:或一个指定其 entry 的字符串。
     * Type: Object
     * Default: undefined
     * 提示:当在 multi-page 模式下构建时，webpack 配置会包含不一样的插件
     * (这时会存在多个 html-webpack-plugin 和 preload-webpack-plugin 的实例)。
     * 如果你试图修改这些插件的选项，请确认运行 vue inspect
     */
    // pages: {
    // index: {
    //   // page 的入口
    //   entry: 'src/index/main.js',
    //   // 模板来源
    //   template: 'public/index.html',
    //   // 在 dist/index.html 的输出
    //   filename: 'index.html',
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'Index Page',
    //   // 在这个页面中包含的块，默认情况下会包含
    //   // 提取出来的通用 chunk 和 vendor chunk。
    //   chunks: ['chunk-vendors', 'chunk-common', 'index']
    // },
    // // 当使用只有入口的字符串格式时，
    // // 模板会被推导为 `public/subpage.html`
    // // 并且如果找不到的话，就回退到 `public/index.html`。
    // // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
    // },
    /**
     * Name : lintOnSave
     * 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
     * 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
     * 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。
     * 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
     * 或者，你也可以通过设置让浏览器（devServer）的 overlay 同时显示警告和错误：overlay: { warnings: true, errors: true}
     * 当 lintOnSave 是一个 truthy 的值时，eslint-loader 在开发和生产构建下都会被启用。
     * 如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置：lintOnSave: process.env.NODE_ENV !== 'production'
     * Type: boolean | 'error'
     * Default: true
     */
    lintOnSave: process.env.NODE_ENV !== 'production',
    /**
     * Name : runtimeCompiler
     * 是否使用包含运行时编译器的 Vue 构建版本。
     * 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
     * 更多细节可查阅：
     * https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
     * Type: boolean
     * Default: false
     */
    runtimeCompiler: false,
    /**
     * Name : transpileDependencies
     * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
     * 如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
     * Type: Array<string | RegExp>
     * Default: []
     */
    transpileDependencies: [],
    /**
     * Name : productionSourceMap
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     * Type: boolean
     * Default: true
     */
    productionSourceMap: false,
    /**
     * Name : crossorigin
     * 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
     * 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
     * 更多细节可查阅: https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
     * Type: string
     * Default: undefined
     */
    // crossorigin:'',
    /**
     * Name : integrity
     * 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
     * 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
     * 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
     * 另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次
     * Type: boolean
     * Default: false
     */
    integrity: false,
    /**
     * Name : configureWebpack
     * 如果这个值是一个对象，则会通过 webpack-merge(https://github.com/survivejs/webpack-merge) 合并到最终的配置中。
     * 如果这个值是一个函数，则会接收被解析的配置作为参数。
     * 该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
     * 更多细节可查阅: https://cli.vuejs.org/zh/guide/webpack.html#简单的配置方式
     * Type: Object | Function
     */
    // configureWebpack:{},
    /**
     * Name : chainWebpack
     * 是一个函数，会接收一个基于 webpack-chain(https://github.com/mozilla-neutrino/webpack-chain) 的 ChainableConfig 实例。
     * 允许对内部的 webpack 配置进行更细粒度的修改。
     * 更多细节可查阅:https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
     * Type : Function
     */
    /**
     * Name : css.modules
     * Default: false
     * 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
     * 设置为 true 后你就可以去掉文件名中的 .module 并将所有
     * 的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
     * 更多细节可查阅:https://cli.vuejs.org/zh/guide/css.html#css-modules
     * Type : boolean
     */
    /**
     * Name : css.extract
     * Default: 生产环境下是 true，开发环境下是 false
     * 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
     * 同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
     * 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
     * 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。
     * 然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
     * 更多细节可查阅:https://cli.vuejs.org/zh/guide/css.html#css-modules
     * Type: boolean | Object
     */
    /**
     * Name : css.sourceMap
     * Default: false
     * 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
     * 更多细节可查阅:https://cli.vuejs.org/zh/guide/css.html#css-modules
     * Type: boolean
     */
    /**
     * Name : css.loaderOptions
     * Default: {}
     * 向 CSS 相关的 loader 传递选项。eg:
     * 支持的 loader 有：
     * css-loader(https://github.com/webpack-contrib/css-loader)
     * postcss-loader(https://github.com/postcss/postcss-loader)
     * sass-loader(https://github.com/webpack-contrib/sass-loader)
     * less-loader(https://github.com/webpack-contrib/less-loader)
     * stylus-loader(https://github.com/shama/stylus-loader)
     * 更多细节可查阅：https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
     * 提示：这样做比使用 chainWebpack 手动指定 loader 更推荐，因为这些选项需要应用在使用了相应 loader 的多个地方。
     * Type: Object
     */
    /**
     * Name : devServer
     * 所有 webpack-dev-server 的选项都支持。
     * 注意：
     * a:有些值像 host、port 和 https 可能会被命令行参数覆写。
     * b:有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 baseUrl 同步以保障正常的工作
     * Type: Object
     */
    devServer: {
        /**
         * Name : devServer.proxy
         * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
         * 这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
         * Type: Object || string
         */
        /**
         * eg1 :
         * proxy: 'http://localhost:4000'
         * 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000
         */
        /**
                                                                     *  eg2 :
                                                                     *  如果你想要更多的代理控制行为，也可以使用一个 path: options 成对的对象。
                                                                     *  完整的选项可以查阅 http-proxy-middleware 。查阅地址：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
                                                                        proxy: {
                                                                            'api': {
                                                                                target: 'url路径',
                                                                                ws: true,
                                                                                changeOrigin: true
                                                                            },
                                                                            'foo': {
                                                                                target: 'url路径',
                                                                            }
                                                                        },
                                                                    */
        proxy: {
            '/server': {
                target: 'https://pxh5.youlanw.com', // 服务器api地址
                changeOrigin: true, // 是否跨域
                ws: true, // proxy websockets
                pathRewrite: { // 重写路径
                    '^/server': '/server'
                }
            },
            '/h5server': {
                target: 'http://bmh5.test.banmazgai.com',
                pathRewrite: {
                    '^/h5server': '/h5server'
                }
            }
        },
        // 显示警告和错误
        overlay: {
            warnings: true,
            errors: true
        },
        // 自动打开浏览器
        open: true
    }
    /**
     *  Name : parallel
     *  Default: require('os').cpus().length > 1
     *  是否为 Babel 或 TypeScript 使用 thread-loader。
     *  该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
     *  Type : boolean
     *  eg : parallel:false || true
     */
    /**
     *  Name : pwa
     *  向 PWA 插件传递选项。文档：https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
     *  Type : Object
     */
    /**
                                     *  Name : pluginOptions
                                     *  这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
                                     *  Type : Object
                                         eg: pluginOptions: {
                                                 foo: {
                                                     // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
                                                }
                                            }
                                    */
    /**
     *  Name : Babel
     *  Babel 可以通过 babel.config.js 进行配置。(接下来会针对此文档进行文案总结，敬请关注)
     *  Vue CLI 使用了 Babel 7 中的新配置格式 babel.config.js。
     *  和 .babelrc 或 package.json 中的 babel 字段不同，这个配置文件不会使用基于文件位置的方案，
     *  而是会一致地运用到项目根目录以下的所有文件，包括 node_modules 内部的依赖。
     *  我们推荐在 Vue CLI 项目中始终使用 babel.config.js 取代其它格式。
     *  所有的 Vue CLI 应用都使用 @vue/babel-preset-app，它包含了 babel-preset-env、JSX 支持以及为最小化包体积优化过的配置。
     *  通过它的文档可以查阅到更多细节和 preset 选项。
     */
    /**
     *  Name : ESLint
     *  ESLint 可以通过 .eslintrc 或 package.json 中的 eslintConfig 字段来配置。
     *  更多细节可查阅:https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint
     */
    /**
     *  Name : TypeScript
     *  可以通过 tsconfig.json 来配置。
     *  更多细节可查阅:https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript
     */
    /**
     *  单元测试
     *  Name1 : Jest
     *  更多细节可查阅:https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest
     *  Name2 : Mocha (配合 mocha-webpack)
     *  更多细节可查阅:https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha
     */
    /**
     *  E2E 测试
     *  Name1 : Cypress
     *  更多细节可查阅:https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress
     *  Name2 : Nightwatch
     *  更多细节可查阅:https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch
     */
}