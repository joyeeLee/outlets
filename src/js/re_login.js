require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'common': 'common',
        'login': 'login'
    },
    shim: {
        'login': {
            deps: ['jquery', 'common']
        }
    }
});
requirejs(['jquery', 'common', 'login'], function () {

});