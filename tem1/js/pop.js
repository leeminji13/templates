var toggleMainPopup = function() {
  
    /* 쿠키 제어 함수 정의 */
    var handleCookie = {
      // 쿠키 쓰기
      // 이름, 값, 만료일
      setCookie: function (name, val, exp) {
        var date = new Date();
        
        // 만료 시간 구하기(exp를 ms단위로 변경)
        date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
        console.log(name + "=" + val + ";expires=" + date.toUTCString() + ";path=/");
        
        // 실제로 쿠키 작성하기
        document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";";
      },
      // 쿠키 읽어오기(정규식 이용해서 가져오기)
      getCookie: function (name) {
        var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return value ? value[2] : null;
      }
    };
    console.log(handleCookie.getCookie("today"));
    
    // 쿠키 읽고 화면 보이게
    if (handleCookie.getCookie("today") == "y") {
      $(".popup_img").removeClass("on");
    } else {
      $(".popup_img").addClass("on");
    }
  
    // 오늘하루 보지 않기 버튼
    $(".popup_img").on("click", ".btn_today_close", function () {
      handleCookie.setCookie("today", "y", 1);
      $(this).parents(".popup_img.on").removeClass("on");
    });
  
    // 일반 버튼
    $(".popup_img").on("click", ".btn_close", function () {
      $(this).parents(".popup_img.on").removeClass("on");
    });
  }
  
  $(function() {
    toggleMainPopup();
  });
  //외부영역 클릭 시 팝업 닫기
  $(document).mouseup(function (e){
    var LayerPopup = $(".popup_img");
    if(LayerPopup.has(e.target).length === 0){
      LayerPopup.removeClass("on");
    }
  });