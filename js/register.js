        'use strict'

        var styleCheck=1;
        var styleYzm = 0;
        var  styleName = 0;
        var stylePass = 0;
        var styleTel =0;
$('.main').find('#tel').on('blur',function(){

      //设置手机号的状态
    //设置正则数字一到9  
    var reg = /^1[3-9]\d{9}$/;
        var  tel=  $('#tel').val()
      if(!reg.test(tel)){
        // console.log(111);
        $('.main').find('p').eq(0).css({visibility:"inherit"})
      }else{
        $('.main').find('p').eq(0).css({visibility:"hidden"})
         styleTel = 1;
      }
})
    //用户名设置状态
$('.main').find('#user').on('blur',function(){
    //设置不能以数字开头的用户名
    var reg =  /^[a-zA-Z_]\w{6,12}$/;
    var user = $('#user').val();
    if(!reg.test(user)){
      $('.main').find('p').eq(1).css({visibility:"inherit"})
    }else{
      $('.main').find('p').eq(1).css({visibility:"hidden"})
     styleName = 1;
    }
    
})
$('.main').find('#code').on('blur',function(){
      //设置密码的长度为6-18位
        var Reglen = /^.{6,18}$/;
         var  code = $('#code').val();
         if(!Reglen.test(code)){
          $('.main').find('p').eq(2).css({visibility:"inherit"})    
         }else{
          $('.main').find('p').eq(2).css({visibility:"hidden"})

         }
})

$('.main').find('#pasw').on('blur',function(){ 
      if($('#code').val()!=$('#pasw').val()){
        $('.main').find('p').eq(3).css({visibility:"inherit"})    
      }else{
        $('.main').find('p').eq(3).css({visibility:"hidden"})
              stylePass = 1;
      }
})

$('.main').find('#yzm').on('blur',function(){
      //验证码的状态哈
      var reg = /\d{6}/;
      var yzm = $('#yzm').val();
      if(!reg.test(yzm)){
        $('.main').find('p').eq(4).css({visibility:"inherit"})    
      }else{
        $('.main').find('p').eq(4).css({visibility:"hidden"})
            styleYzm =1;
        }
})
$('.main').find('#read').on('click',function(){
        // console.log($('#read')[0].checked);
        //当选中的时候开始书写其他的状态哈
          if(!$('#read')[0].checked){
            $('.main').find('#but').css({background:"#ccc",})
            //然后在勾选那里弹出点东西。
            styleCheck =0;
            $('.main').find('p').eq(5).css({visibility:"inherit"})    
          }else{
            $('.main').find('#but').css({background:"cornflowerblue"})
            $('.main').find('p').eq(5).css({visibility:"hidden"})
            styleCheck = 1;
          }
         
})
    
      $('#but').on('click',function(){
        // localStorage.setItem("name","哈哈哈")
      
      
        if(styleTel+styleName+styleCheck+stylePass+styleYzm==5){
          alert('注册成功');
          //设置数据到localstrange里面
          var json = [{"name":$('#user').val(),"pass":$('#pasw').val()}];
          localStorage.setItem("name",JSON.stringify(json));
          //进行判断以后写
        }else{
          alert('注册失败')
        }
      })
// document.onclick = function(){
//       console.log(styleTel+styleName+styleCheck+stylePass+styleYzm);
// //  console.log(styleTel);
// //   console.log(styleName);
// //   console.log(styleCheck);
// //   console.log(stylePass);
// //   console.log(styleYzm);
// } 