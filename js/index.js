;(function(){
    'use strict';
    $('#banner').banner({
        list:true,
        items:$('.imgbox').find('img'),
        left:$('#left'),
        right:$('#right'),
        index:0,
        timeout:2000,
        smdist:0,
        bgdist:1000,
    })  //banner结束
    
    //书写进入banner时候 btns的显示和消失
    //书写btns的状态。
    // $('.btns').hide();
    // $('#banner').hover(function(){
    //     $('.btns').show(500);
         
    // },function(){
    //     $('.btns').hide(500);
    // })
    
            //给服务时间添加点按钮时间 
    $('#banner').find('.br-t').children('a').on('click',function(){
        $('#banner').find('.br-t').children('a').removeClass('active');
                $(this).addClass('active');
    })
    // 给高级搜索添加 下划线和变色效果。 和搜索框下面的东西加点东西
    $('#search').find('.sc-t').find('a').hover(function(){
      $(this).css({color:'#3ea600',textDecoration:'underline'});
    },function(){
        $(this).css({color:'#757575'})
    })
    $('#search').find('.sc-b').find('a').hover(function(){
        $(this).css({color:'#3ea600',textDecoration:'underline'});
      },function(){
          $(this).css({color:'#757575',textDecoration:'none'})
      })


          // 购物车的下划线效果 和企业购
    $('nav').find('.n-r').children('p').eq(1).hover(function(){
        $(this).css({color:'#3ea600',textDecoration:'underline'});
        $(this).find('span').css({textDecoration:'none'});

    },function(){
        $(this).css({color:'#757575',textDecoration:'none'})
    })
    $('nav').find('.n-r').children('p').eq(3).hover(function(){
        $(this).css({color:'#3ea600',textDecoration:'underline'});
        $(this).find('span').css({textDecoration:'none'});

    },function(){
        $(this).css({color:'#757575',textDecoration:'none'})
    })
            //给客户服务加点东西 加你麻痹的东西  cnm
 $('nav').find('.n-r').children('p').eq(2).hover(function(){
            
},function(){})





        //给登录注册和地址选款加效果
    $('nav').find('.n-l').children('a').eq(0).hover(function(){
        $(this).css({color:'#3ea600',textDecoration:'underline'});
    },function(){
        $(this).css({color:'#757575',textDecoration:'none'})
    })
    $('nav').find('.n-l').children('a').eq(1).hover(function(){
        $(this).css({color:'#3ea600',textDecoration:'underline'});
    },function(){
        $(this).css({color:'#757575',textDecoration:'none'})
    })
    $('nav').find('.n-l').children('select').hover(function(){
        $(this).css({color:'#3ea600',textDecoration:'underline'});
    },function(){
        $(this).css({color:'#757575',textDecoration:'none'})
    })

   
    //给图片精灵那里加点东西。
    $('#banner').find('.b-l').find('li').hover(function(){
        // $(this).css({background:'#3ea600'});
$('#banner').find('.b-l').find('li').css({background:'#3ea600'})
        .find('a').css({color:'#fff'})
$(this).css({background:'#fff',color:'#3ea600'})
        .find('a').css({color:'#3ea600'})
        $(this).find('.menus').stop().show(1000);


    },function(){
     $('#banner').find('.b-l').find('li').css({background:'#3ea600'})
             .find('a').css({color:'#fff'})
             $(this).find('.menus').stop().hide(1000);
    })

    $('#banner').find('.b-l').find('li').find('a').hover(function(){
        $(this).css({color:'#3ea600',textDecoration:'underline'});
    },function(){
        $(this).css({color:'#757575',textDecoration:'none'})
    })

    //绑定耳机菜单从我做起。
    // #banner .b-l ul li
 

})();