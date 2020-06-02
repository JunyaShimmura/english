var dt = $(".qa-content dt");
dt.on("click",function(){
  var ele = this;
  $(ele).toggleClass("open");
  $(ele).next().slideToggle();
});
