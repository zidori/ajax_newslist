$(function(){
  /* script 영역 ajax 사용 예 */
  $.ajax({
    url:'data.xml',
    dataType: 'xml',
    success: function(data){
      // 실행문
      // 특정data를 가져오는 방법 : 1번
      // console.log($(data).find("item"));
      // 특정data를 가져오는 방법 : 2번
      // console.log($("item",data));
      $("item",data).each(function(){
        $(this)
        // console.log($(this).find("link").text());
        // console.log($("link",this).text());
        let linkText = $("link",this).text();
        let desText = $("description",this).text();
        // let desText = $("description",this).html();
        // $("dl").append('<dt><a href="'+$("link",this).text()+'">'+$("link",this).text()+'</a></dt><dd>'+desText+'</dd>');
        $("dl").append('<dt><a href="'+linkText+'">'+linkText+'</a></dt><dd>'+desText+'</dd>');
      });
    }
  })

  $("button").click(function(){
    // 내가 한 것
    // $(this).next().toggle();
    // if($(this)){
    //   $(this).next().addClass("on")
    // }else{
    //   $(this).next().removeClass("on")
    // }

    // class 추가 : 1번
    // $(this).toggleClass("on");

    // class 추가 : 2번
    // let thisClass = $(this).attr("class");
    // console.log(thisClass)
    // if(thisClass == "" || thisClass == undefined){
    //   $(this).addClass("on");
    // }else{
    //   $(this).removeClass("on");
    // }

    // class 추가 : 3번
    if($(this).hasClass("on")){
      $(this).removeClass("on");
    }else{
      $(this).addClass("on");
    }
  });
});
