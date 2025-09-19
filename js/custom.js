$(function () {
  let con01 = $("#con01").offset().top;
  let con02 = $("#con02").offset().top;
  let con03 = $("#con03").offset().top;
  let con04 = $("#con04").offset().top;
  console.log(con01, con02, con03, con04);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    if (scroll >= con02) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }

    if (scroll >= con01 && scroll < con02) {
      //첫번째페이지
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
    } else if (scroll >= con02 && scroll < con03) {
      //두번째 페이지
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("#con02").addClass("on");
    } else if (scroll >= con03 && scroll < con04) {
      //세번째 페이지
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("#con03").addClass("on");
    } else {
      //네번째 페이지
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
    }
  });

  $("header li").on("click", function () {
    let i = $(this).index();
    navi();
  });

  $("#navi li").on("click", function () {
    let i = $(this).index();
    navi();
  });

  function navi() {
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    $("html, body").animate({ scrollTop: target });
  }
});
