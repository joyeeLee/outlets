require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'common': 'common',
        'head_side': 'head_side',
        'shopcar': 'shopcar',
        'import': 'import'
    },
    shim: {
        'shopcar': {

            deps: ['jquery', 'common', 'head_side', 'import']

        },
        'head_side': {

            deps: ['jquery', 'common', 'import']

        },
        'import': {

            deps: ['jquery', 'common']

        }

    }
});
requirejs(['jquery', 'common', 'head_side', 'shopcar', 'import'], function () {

});