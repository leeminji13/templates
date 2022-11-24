$(function(){
    //click event
    $('#').click(function(){
    });

    $(window).scroll(function(){
        var $offset = 200; 

        var $class = $('.class')
        var $classOST = $class.offset().top - $offset
        if($(this).scrollTop() > $classOST){
            $class.find('.enSub').addClass('txt_up');
        }
    });
    $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        $classOST = $class.offset().top - $offset;
    });

    //tab
    $('ul.tab_ul li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tab_ul li').removeClass('tabOn');
        $('.tab_img').removeClass('tabOn');

        $(this).addClass('tabOn');
        $("#"+tab_id).addClass('tabOn');
    });
});
//실시간 시계
const clock = document.querySelector("#clock")
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}
getClock();
setInterval(getClock, 1000);

//폼
$('#btn01').click(function(e){
    e.preventDefault();

    if ($(this).parents('form').find("[name='cname']").val() == "") {
            alert("이름을 입력하세요");
            return false;
    }

    if ($(this).parents('form').find("[name='cphone']").val() == "") {
            alert("휴대폰을 입력하세요");
            return false;
    }

    if ($(this).parents('form').find('input[type=checkbox][name=ag]').prop("checked")) {
            $(this).parents('form').submit();
    } else {
            alert("개인정보수집 및 이용동의를 체크해주세요");
            return false;
    }
});
$('.btn_event').click(function(){
$('html, body').animate({scrollTop: $('.event_sec').offset().top }, 400);
return false;
})