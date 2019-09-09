// console.log(localStorage.name);
// console.log(typeof localStorage.name)
// $('#user').val();
// $('#pass').val();
// $("#sub");
$("#reg").on("click",function(){
        //点击注册的时候跳转到注册的界面。
    window.location.href = "./register.html";
})
$('#sub').on('click',function(){
    //这里需要判断如果没有localstrange  需要去注册。
   var  inf = JSON.parse(localStorage.information);
  console.log(inf);
  console.log(inf.length);
             //给状态给遍历的值 遍历成功赋值 遍历不成功 不赋值。
             //遍历成功的时候写出各种错误。
             var stylecheck = 1;
            for(var i =0;i<inf.length;i++){
                     console.log(inf[i].name);
                     console.log(inf[i].pass);
            if(inf[i].name==$('#user').val() && inf[i].pass ==$('#pass').val()){
                    alert('恭喜你登录成功');
                    //设置你的用户名字。
                    localStorage.setItem('login',$('#user').val());
                    window.location.href ='./index.html';   
                    stylecheck =0;
                 }else if(inf[i].name==$('#user').val() && inf[i].pass !=$('#pass').val()){
                        stylecheck =2;
                 }
                 
            }//for循环结束。
            if(stylecheck == 1){
                    //都不正确的状态。
                alert('你注册的样子像鸡了蔡徐坤');
            }
            if(stylecheck == 2){
                alert('你密码错了傻屌');
            }
            
})