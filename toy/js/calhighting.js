$(document).ready(function(){
    // 브라우저 너비 높이값 변수 할당
    // 콘솔에 브라우저 너비값 : ??? 브라우저 높이값 : ???
    var browserWidth = $(window).width();
    var browserHeight = $(window).height();
    console.log('브라우저 너비값 : ' + browserWidth);
    console.log('브라우저 높이값 : ' + browserHeight);
    // DOM #wrap에 동적 높이값 적용
    $('#wrap').css({height:browserHeight})

});