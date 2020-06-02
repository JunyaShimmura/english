
var $nav = $(".four nav li");

$nav.on("click",function(){
  $nav.removeClass("active");
  $(this).addClass("active");
  var idx = $(".four nav li").index(this);

  var $items = $(".four-content .item");

  $items.each(function(i,item){
    if(i === idx){
      // 6.1. `<div class="item">`に`active`というクラスを付ける
      $(item).addClass("active");
      // 6.2. コンテンツの不透明度を１にする
      $(item).css("opacity",1);


    }else{
      // 6.1. `<div class="item">`に`active`というクラスを付ける
      $(item).removeClass("active");
      // 6.2. コンテンツの不透明度を１にする
      $(item).css("opacity",0);

    }
  }) // $items.each

})

var $rbtn = $(".reason button")
var $rul = $(".reason ul")
$rbtn.on("click",function(){
 $rul.toggleClass("open")
})
