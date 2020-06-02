var $inputs = $(".contact__form input,.contact__form textarea");
  
$inputs.on("input focus",function(){

  var value = $(this).val().trim();
  var name = $(this).attr("name");

  var error = false;

  switch(name){

    case "name":
      if(value === "") error = true;
      break;
    case "mail":
      var pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      if(pattern.test(value) === false) error = true;
      break;
    case "content":
      if(value === "") error = true;
      break;
    default:
      break;
  }

  if(error){
    $(this).next().show();
    $(this).removeClass("isClear");
  }else{
    $(this).next().hide();
    $(this).addClass("isClear");
  }

  if($inputs.length === $(".contact__form .isClear").length){
    $(".contact__form button").attr("disabled",false)
  }else{
    $(".contact__form button").attr("disabled",true)
  }

});

// 送信を押した時のチェック
$(".contact__form").on("submit",function(){
  if($inputs.length !== $(".contact__form .isClear").length){
    return false;
  }
});
