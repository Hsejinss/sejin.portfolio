$(document).ready(function () {

  // cursor 가져오기
  $(function () {
    var prefix = (function () {
      var a = window.getComputedStyle(document.documentElement, ""),
        b = (Array.prototype.slice
          .call(a)
          .join("")
          .match(/-(moz|webkit|ms)-/) ||
          ("" === a.OLink && ["", "o"]))[1];
      return (
        "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1],
        "-" + b + "-"
      );
    })();

    // 마우스 커서 따라다니게끔 설정하기
    $(document).mousemove(function (e) {
      // X축, Y축에 각각 30px의 크기를 지정해줌
      mouseX = e.pageX + 20;
      mouseY = e.pageY - $(window).scrollTop() + 20;

      // .pen-outer에게 속성을 불러오기 (상단에 선언한 변수 mouseX, mouseY의 스타일)
      $(".pen-outer").attr( "style", prefix + "transform:translate(" + mouseX + "px," + mouseY + "px)");
    });
  });

  media();
  function media() {
    var ww = $(window).width();
    if (ww >= 1320) {
      new fullpage("#wrap", {
        // 새로고침시 해당 페이지 유지
        anchors: [
          "firstPage",
          "secondPage",
          "3rdPage",
          "4rdPage",
          "5rdPage",
          "6rdPage",
        ],
        // 스크롤바 생성
        scrollBar: true,
        // 정상스크롤로 변경
        normalScrollElements: ".contact, .footer",
        // 높이값이 풀페이지가 아닌 경우, 상단영역으로 올라가는 것 막아주기
        fitToSection: false,
      });
    } else {}
  }

  // index 클릭시 해당 페이지로 이동
  var ww = $(window).width();
  var wh = $(window).height();

  function layout() {
    page = ["work1", "work2", "work3", "work4", "work5"];

    $(".work").css({
      width: ww,
      height: wh,
    });
  }
  const main = $(".banner").offset().top;
  const sec1 = $(".sec-1").offset().top;
  const sec2 = $(".sec-2").offset().top;
  const sec3 = $(".sec-3").offset().top;
  const sec4 = $(".sec-4").offset().top;
  const sec5 = $(".sec-5").offset().top;
  const sec6 = $(".sec-6").offset().top;
  const sec7 = $(".sec-7").offset().top;
  const contact = $(".contact").offset().top;

  // $('.index').each(function(index){
  //     $(this).attr('data-index', index);
  // });



  // 메뉴 클릭시 해당 페이지로 이동
  $(".header-area .m-main").click(function(){
    $("html, body").animate({
      scrollTop: main
    });
  });
  $(".header-area .m-work").click(function(){
    $("html, body").animate({
      scrollTop: sec2
    });
  });
  $(".header-area .m-about").click(function(){
    $("html, body").animate({
      scrollTop: sec1
    });
  });
  $(".header-area .m-contact").click(function(){
    $("html, body").animate({
      scrollTop: contact
    });
  });

  // work-sec pagination 클릭시 해당 작업물로 이동
  $(".p-box1").click(function () {
    // let a = $(this).attr('data-index');
    $("html, body").animate({
      scrollTop: sec3 + 100,
    });
  });
  $(".p-box2").click(function () {
    // let a = $(this).attr('data-index');
    $("html, body").animate({
      scrollTop: sec4 + 100,
    });
  });
  $(".p-box3").click(function () {
    // let a = $(this).attr('data-index');
    $("html, body").animate({
      scrollTop: sec5 + 100,
    });
  });
  $(".p-box4").click(function () {
    // let a = $(this).attr('data-index');
    $("html, body").animate({
      scrollTop: sec6 + 100,
    });
  });
  $(".p-box5").click(function () {
    // let a = $(this).attr('data-index');
    $("html, body").animate({
      scrollTop: sec7 + 100,
    });
  });

  // work section으로 스크롤 했을때 work-index 나오게
  const index = $(".content-pagination");
  $(window).scroll(function () {
    if ($(window).scrollTop() >= sec3 && $(window).scrollTop() < contact) {
      // sct이 sec-3보다 클때 pagination이 fadeIn, fixed
      index.fadeIn();
      // $(".work .content-pagination").css({ position: "fixed" });
    }else{
      index.fadeOut();
      // $(".work .content-pagination").css({ display: "none" });
    }
    

  });
});



// 마우스커서
// https://velog.io/@bangina/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EA%BF%80%ED%8C%81-%EB%A7%88%EC%9A%B0%EC%8A%A4%EC%BB%A4%EC%84%9C-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0%EC%89%AC%EC%9B%80
// 타이핑 효과
// https://gahyun-web-diary.tistory.com/2