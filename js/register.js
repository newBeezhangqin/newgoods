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
          // alert('注册成功');
          //当长度等于0时候开始往localstrange设置东西然后进行判断
          var temp = 0;
              //当local为0的时候。
          if(localStorage.length==0){
              //设置数据到localstrange里面
             var json = [{"name":$('#user').val(),"pass":$('#pasw').val()}];
             localStorage.setItem("information",JSON.stringify(json));
                    alert('注册成功');
            }else if(localStorage.length>=1){
                  //遍历所有的名字然后判断所有的判读用户名是否重合 并进行判断                 
                  var inf = JSON.parse(localStorage.information);
                 
                  //开始遍历哈 遍历成功后 输出状态为1  失败后输出为1；
                  for(var i =0;i<inf.length;i++){
                        if(inf[i].name == $('#user').val()){
                              temp =1;
                        }else{
                              temp =2;
                        }
                      }
                        if(temp ==1){
                          alert('你用户名重合了');
                        }else if(temp==2){
                            alert('注册成功');
                          inf.push({"name":$('#user').val(),"pass":$('#pasw').val()});
                          console.log(inf);
                          localStorage.setItem('information',JSON.stringify(inf));
                        }        
                      } 
          }

      


          









          //进行判断以后写
        // }else{
        //   //注册失败里面的用户名记得不能一样
        //   alert('注册失败')
        //   console.log(localStorage.length);
        // }
      })
