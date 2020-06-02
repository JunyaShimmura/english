var time = 300;
var $btn = $(".burger__btn");
$btn.css("transition","background-color " + time + "ms")
$btn.find("span").css({
  transition: "transform " + time + "ms"
});

$btn.on("click",function(){
  $(this).toggleClass("open");
  $(".burger__modal").fadeToggle(time);
});

$(".burger__modal__menu li a").on("click",function(){

  $btn.click();

  var speed = 500;
  var href = $(this).attr("href");
  var position = $(href).offset().top - $("header").innerHeight();
  $("html,body").animate({scrollTop: position},speed,"swing");

});



var h = $(window).height();
$(window).on("scroll",function(){
  var s = $(window).scrollTop();
  if(h/2 < s){
    $(".btnTop").addClass("active");
  }else{
    $(".btnTop").removeClass("active");
  }
})

$(".btnTop").on("click",function(){
  /*
  htmlとbody要素のscrollTopを500ミリ秒かけて0にする（スクロールを戻す）。
  ＄("html")だけ$("body")だけで良いのでは無いか？と思うかもしれないが、
  IEやfirefoxなど色んなブラウザで同じ効果を得るための慣例
  */
  $("html,body").animate({scrollTop: 0 }, 500, "swing");

});
