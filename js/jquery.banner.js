;(function($){
    "use strict";

    // 有没有操作到DOM
    // 有：局部
    // 没有：只是做功能，类似于ajax，cookie，全局

$.fn.banner = function(opts){
     var {list,index,items,left,right,smdist,bgdist} = opts;
   
     index = index || "";
     left = left || '';
     right = right || ""; 

    if(list){
        var str = "";
         for(var i= 0;i<items.length;i++){
             str+=`<li></li>`
         }
   }
    //拼接字符串 并且将字符串里面的东西塞进

   var hhh = $('<ul>').html(str);

   $(this).append(hhh);
   $(this).append(hhh);
   //书写li和ul的属性。
      $('#banner>ul').css({
      position:'absolute',
      left:0,
      bottom:0,
      width:"400px",
      marginLeft:800,
      marginBottom:10,
      padding:0,
      textAlign:'center',
      }).children("li").css({
           float:'left',
           borderRadius:"50%",
           background:"rgba(255,255,255,0.4)",
           color:"#fff",
           lineHeight:'30px',
           width:25,
           height:25,
           margin:'0 10px'
      }).eq(index).css({
              background:"#fff",
              color:"ac4"
      }) //样式设置
      
      //设置点击事件
      $('#banner>ul').children('li').hover(function(){
    
        $('#banner>ul').children('li').css({
            background:"rgba(255,255,255,0.4)",
            color:"#fff"
        
        });//设置初始样式
        if($(this).index()<index){
        $(this).css({
            background:"#fff",
            color:"ac4"
        });
        items.eq(index).css({
            left:smdist
        }).stop().animate({
            left:-bgdist,
        });
        items.eq($(this).index()).css({
            left:bgdist,
        }).stop().animate({
                  left:smdist,
        })

    } //当前索引小的时候
    if($(this).index()>index){
        $(this).css({
            background:"#fff",
            color:"ac4"
        });
        //设置位移。
        items.eq(index).css({
            left:smdist
        }).stop().animate({
            left:bgdist
        });
        items.eq($(this).index()).css({
            left:bgdist,
        }).stop().animate(
            {
                left:smdist,
            }
        )
    }//当前索引大的时候。

    index = $(this).index(); 
   },function(){
       
   })//划入事件的结束

   left.on('click',function(){
    // clearInterval(t);
    $('#banner>ul').children('li').css({
        background:"rgba(255,255,255,0.4)",
        color:"#fff"
    });

    if(index==0){
        index = items.length-1;                       
    }else{
        index--;                    
    }
   
    $('#banner>ul').children('li').eq(index).css({
        background:"#fff",
        color:"ac4"
    });
    items.eq(index+1).css({
        left:smdist
    }).stop().animate({
        left:bgdist,
    });
    items.eq(index).css({
        left:bgdist,
    }).stop().animate({
        left:smdist,
    }                      
    )
})
        right.on('click',function(){
        
            $('#banner>ul').children('li').css({
                background:"rgba(255,255,255,0.4)",
                color:"#fff"
            });
        if(index==items.length-1){
            index = 0;                    
        }else{
            index++;
        }
          
            $('#banner>ul').children('li').eq(index).css({
                background:"#fff",
                color:"ac4"
            });
        items.eq(index-1).css({
            left:smdist
        }).stop().animate({
            left:bgdist,
        });
        items.eq(index).css({
            left:-bgdist,
        }).stop().animate({
            left:smdist,
        })

}) //点击事件结束;

        //trigger

       var t = null;
        var t = setInterval(() => {
            right.trigger("click");
        }, 1000);





}//函数结束
    
})(jQuery);