const { VuetifyPlugin } = require('webpack-plugin-vuetify')

// Webpack/Vue CLI
new VuetifyPlugin({
  styles: { configFile: 'src/assets/css/variables.scss' }
})

module.exports = {
  plugins: [
    new VuetifyPlugin({ autoImport: true }), // Enabled by default
  ],
}


// const chalk = require('chalk');
// const glob = require('glob');
// const path = require('path');
// const { BugsnagSourceMapUploaderPlugin } = require('webpack-bugsnag-plugins');
// const appVersion = require('./composer.json').version;
//
// const Encore = require('@symfony/webpack-encore');
// if (!Encore.isRuntimeEnvironmentConfigured()) {
//   Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
// }
//
// // see https://symfony.com/doc/current/frontend/encore/installation.html#installing-encore-in-non-symfony-applications
// Encore.setOutputPath('public/assets/')
//   .configureDevServerOptions((options) => {
//     options.allowedHosts = '*';
//   })
//   .setPublicPath('/assets')
//   .autoProvidejQuery()
//   .addEntry('aircall', './module/templates/assets/js/crm/telephony/aircall.js')
//   .splitEntryChunks()
//   .disableSingleRuntimeChunk()
//   .cleanupOutputBeforeBuild()
//   .configureBabel(() => {}, {
//     useBuiltIns: 'usage',
//     corejs: 3,
//   })
//   .enablePostCssLoader()
//   .enableBuildNotifications()
//   .enableSourceMaps()
//   .enableVersioning(Encore.isProduction())
//   .enableSassLoader()
//   .enableTypeScriptLoader()
//   .enableVueLoader(() => {}, { runtimeCompilerBuild: false })
//   .copyFiles({
//     from: path.resolve(__dirname, './node_modules') + '/intl-tel-input/build/js/',
//     pattern: /utils\.(js)$/,
//     to: 'vendor/intl-tel-input/js/utils.js',
//   })
//   .addLoader({
//     test: /\.(graphql|gql)$/,
//     exclude: /node_modules/,
//     loader: 'graphql-tag/loader',
//   });
//
// // add all components recursively as Encore entry
// const moduleAssetsEntryPoints = glob.sync('**/!(styles)/{styles.scss,index.{js,ts}}', {
//   cwd: './module/assets',
// });
// // add design system files as Encore entry
// const designSystemEntryPoints = glob.sync('**/*.css', {
//   cwd: path.resolve(__dirname, './node_modules') + '/@anwalt.de/design-system/dist/css',
// });
//
// let addedEntries = [];
//
// moduleAssetsEntryPoints.forEach((file) => {
//   addEntryPoint(file, './module/assets/', file.replace(/\/(styles.s?css|index\.(js|ts))/, ''));
// });
// designSystemEntryPoints.forEach((file) => {
//   addEntryPoint(
//     file,
//     './node_modules/@anwalt.de/design-system/dist/css/',
//     '@anwalt.de/design-system/' + file.replace('.css', '')
//   );
// });
//
// function addEntryPoint(file, filePathPrefix, fileName) {
//   const filePath = filePathPrefix + file;
//
//   if (addedEntries.indexOf(fileName) !== -1) {
//     return;
//   }
//
//   console.log(`adding entry ${chalk.green(fileName)} located at ${chalk.green(filePath)}`);
//
//   if (/\/index\.(js|ts)$/.test(file)) {
//     Encore.addEntry(fileName, filePath);
//   } else {
//     Encore.addStyleEntry(fileName, filePath);
//   }
//
//   addedEntries.push(fileName);
// }
//
// const config = Encore.getWebpackConfig();
//
// // additional webpack config
// config.resolve.alias['vue-froala-wysiwyg'] = path.resolve(__dirname, './node_modules/vue-froala-wysiwyg/src');
//
// if (Encore.isProduction() || process.env.APPLICATION_ENV === 'STAGING') {
//   config.devtool = 'source-map';
//   config.plugins.push(
//     new BugsnagSourceMapUploaderPlugin({
//       apiKey: 'adb3ae5f188b0d64585649e543e2b7c2',
//       appVersion: appVersion,
//       overwrite: true,
//     }),
//     new BugsnagSourceMapUploaderPlugin({
//       apiKey: '128468a0e219bd1c215a532242f89d2e',
//       appVersion: appVersion,
//       overwrite: true,
//     }),
//     new BugsnagSourceMapUploaderPlugin({
//       apiKey: '7d42c03b35fb8a06db792800ce510e87',
//       appVersion: appVersion,
//       overwrite: true,
//     })
//   );
// }
//
// module.exports = config;
