$(document).ready(function(){
    $(window).load(function(){
       $(".register").hide();
       $(".loginAndregister_top>ul>li").eq(0).addClass("on");
       bannerEffect();
       $(".index_content_item_text").hide();
       $(".f_r li").eq(0).addClass("red");
   	});
    $(".loginAndregister_top>ul>li").click(function(){
       var i=$(this).index();
       $(this).addClass("on").siblings().removeClass("on");
       $(".loginAndregister_content>div").eq(i).show().siblings().hide();
    });

    var user=false;
    var password=false;
    var repass=false;
    var tell=false;
    // 用户名验证
    $('input[name="user"]').focus(function(){
    	$(this).parent().prev().text("用户名应在3-20位之间！").addClass("state");
    }).blur(function(){
    		if($(this).val().length>=3&&$(this).val().length<=20&&$(this).val().length!=" "){
    			$(this).parent().prev().text("用户名正确");
    			user=true;
    		}else{
    			$(this).parent().prev().text("用户名错误")
    		}
    });
    // 密码验证
    $('input[name="password"]').focus(function(){
    	$(this).parent().prev().text("密码应在6-20位之间！").addClass("state");
    }).blur(function(){
    		if($(this).val().length>=3&&$(this).val().length<=20&&$(this).val().length!=" "){
    			$(this).parent().prev().text("密码正确");
    			password=true;
    		}else{
    			$(this).parent().prev().text("密码错误")
    		}
    });
    //确认密码验证
    $('input[name="repass"]').focus(function(){
    	$(this).parent().prev().text("输入的确认密码要和上面的密码一致").addClass("state");
    }).blur(function(){
    	if($(this).val().length>=6&&$(this).val().length<=20&&$(this).val().length!=" "&&$(this).val()==$('input[name="password"]').val()){
    			$(this).parent().prev().text("success");
    			repass=true;
    		}else{
    			$(this).parent().prev().text("+")
    		}
    });
    //
    //手机号验证
    $('input[name="tell"]').focus(function(){
    	$(this).parent().prev().text("手机号应为11位！").addClass("state");
    }).blur(function(){
    	if($(this).val().length==11&&$(this).val().search(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/)){
    			$(this).parent().prev().text("手机号正确");
    			tell=true;
    		}else{
    			$(this).parent().prev().text("手机号错误");
    		}
    });
    //点击按钮验证
    $(".submit").click(function(){
    	if(user&&password){
    		$("form").submit();
    	}
    	else{
    		alert("请输入正确信息！")
    	}
    });

    // 主页商品鼠标滑过效果
    $(".index_content_item").mouseenter(function(){
        var i=$(this).index();
        $(".index_content_item_text").eq(i).show();
    });
    $(".index_content_item").mouseleave(function(){
        $(".index_content_item_text").hide();
    });
    $(".pay").click(function(){
        alert("您已成功添加到购物车哦！");
    });
    $(".index_content_item").click(function(){
        window.location.href="productDetail.html";
    });

    //点击- + 改变购买数量
    $(".num_decrease").click(function(){
        if($(".input_number").val()<=1){
            $(".input_number").val(1);
        }else{
            $(".input_number").val(parseInt($(".input_number").val()-1));
        }
    });
    $(".num_increase").click(function(){ 
        $(".input_number").val(parseInt($(".input_number").val()+1));        
    }); 

    //点击加入购物车弹出提示
    $(".join_shoppingcar").click(function(){
        // 是否登录判断？
        alert("您已成功添加到购物车哦！");
    }); 
    
    var number=1;
    var singlemoney=0;//点击结算后计算总价
    $(".checkboxAll").click(function(){
        $(".checkbox").click();
        number=$(".input_number").val();
        console.log(number);
        singlemoney=$(".number_change ul li .singlemoney").text();
        console.log(singlemoney);
    });
      $(".ss").click(function(){
        alert($(".ss").index());
      });

      //点击减少按钮实现动态计算总价
    $(".num_decrease").click(function(){
        $(".acccounts").text($(".singlemoney").text()*$(".input_number").val());
         $(".xiaoji").text($(".singlemoney").text()*$(".input_number").val());
    });
     //点击减少按钮实现动态计算总价
    $(".num_increase").click(function(){
        $(".acccounts").text($(".singlemoney").text()*$(".input_number").val());
        $(".xiaoji").text($(".singlemoney").text()*$(".input_number").val());
    });
    $(".input_number").blur(function(){
        $(".acccounts").text($(".singlemoney").text()*$(".input_number").val());
        $(".xiaoji").text($(".singlemoney").text()*$(".input_number").val());
    });

    $(".jiesuan").click(function(){

    });


});
 
//轮播图
function bannerEffect(){
    /*1.设置修改轮播图的页面结构
     a.在开始位置放最后一张图片
     b.在结束位置放最前一张图片
     */
    /*1.1获取轮播图结构*/
    var banner=document.querySelector(".jd_banner");
    /*1.2获取图片容器*/
    var imgBox=banner.querySelector("ul:first-of-type");
    console.log(imgBox);
    /*1.3获取第一张图片*/
    var first=imgBox.querySelector("li:first-of-type");
    /*1.4获取最后一张图片*/
    var last=imgBox.querySelector("li:last-of-type");
    /*1.5在首尾插入两张图片 cloneNode复制一个dom元素 */
    imgBox.appendChild(first.cloneNode(true));
    imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild);//inserBefore(需要插入的元素，位置)

    /*2设置对应的样式*/
    /*2.1获取所有li元素*/
    var lis=imgBox.querySelectorAll("li");
    // 2.2获取li元素的数量
    var count=lis.length;
    //2.3获取banner的宽度
    var bannerWidth=banner.offsetWidth;
    //2.4设置图片盒子的宽度
    imgBox.style.width=count*bannerWidth+"px";
    //2.5设置每一个li元素的宽度
    for(var i=0;i<lis.length;i++){
        lis[i].style.width=bannerWidth+"px";
    }
    /*3.设置默认偏移*/
    imgBox.style.left=-bannerWidth+"px";

    /*4.当屏幕发生变化时，重新开始计算*/
    window.onresize=function(){
    //4.1获取banner的宽度,覆盖全局的宽度值
    bannerWidth=banner.offsetWidth;
    //4.2设置图片盒子的宽度
    imgBox.style.width=count*bannerWidth+"px";
    //4.3设置每一个li元素的宽度
    for(var i=0;i<lis.length;i++){
        lis[i].style.width=bannerWidth+"px";
    }
    //4.4重新设置定位置
    imgBox.style.left=-index*bannerWidth+"px";
    }

    //5.实现自动轮播
    var index=1;//初始展示图片的索引值
    setInterval(function(){
        //5.1变换索引
        index++;
        //5.2添加过度效果
        imgBox.style.transition="left 0.5s ease-in-out";
        //5.3设置偏移
            imgBox.style.left=(-index*bannerWidth)+"px";
        setTimeout(function(){
            //5.4判断是否到最后一张，如果是则执行下面代码
            if(index==count-1){
            index=1;
            /*如果一个元素的某个属性之前添加过过渡效果。那么过度属性会一直存在，
            如果不想要，则需要清除过度效果*/
            imgBox.style.transition="none";
            //偏移到指定位置
            imgBox.style.left=(-index*bannerWidth)+"px";
            }
        },500);
    },2000);
}