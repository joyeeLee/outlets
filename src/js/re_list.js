require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'common': 'common',
        'head_side': 'head_side',
        'paging': '../lib/paging',
        'list': 'list',
        'import': 'import'
    },
    shim: {
        'list': {

            deps: ['jquery', 'common', 'head_side', 'import', 'paging']

        },
        'head_side': {

            deps: ['jquery', 'common', 'import']

        },
        'import': {

            deps: ['jquery', 'common']

        }

    }
});
requirejs(['jquery', 'common', 'head_side', 'paging', 'list', 'import'], function () {

});