require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'common': 'common',
        'myqueryUI': 'myqueryUI',
        'index': 'index'
    },
    shim: {
        'index': {
            deps: ['jquery', 'common', 'myqueryUI']
        }
    }
});
requirejs(['jquery', 'common', 'myqueryUI', 'index'], function () {

});