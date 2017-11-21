
$(function(){
    var $popupWrap = $('#popup-wrap');
    setTimeout(function(){
    $popupWrap.fadeIn();        
    }, 1000);
    
    var $contents = $('.result-item-article > .content');
    $contents.dotdotdot();
    
    $(".nano").nanoScroller();
    
    console.log('ok');
});