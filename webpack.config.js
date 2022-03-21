var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('./src/Resources/public')
    .setPublicPath('/bundles/metronome')
    .setManifestKeyPrefix('bundles/metronome')
    .addEntry('admin', './assets/admin.js')
    .enableStimulusBridge('./assets/controllers.json')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .enablePostCssLoader()
;

module.exports = Encore.getWebpackConfig();
