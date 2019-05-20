require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'common': 'common',
        'reg': 'reg',
        'gver': '../lib/gVerify'
    },
    shim: {
        'reg': {

            deps: ['jquery', 'common', 'gver']

        },


    }
});
requirejs(['jquery', 'common', 'gver', 'reg'], function () {

});