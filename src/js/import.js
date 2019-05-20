$(function () {
    $('.head1').load('headmain.html', function () {
        indexp.init();
    });
    $('.sideabr').load('sidebar.html', function () {
        indexp.init();
    });
    $('.foot').load('foot.html');
});