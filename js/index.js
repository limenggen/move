$(document).ready(function(){
	/*轮播图鼠标移入移出事件*/
	var $car=$(".mycarNav ul").children("li");
	$car.hover(function(){
		var index=$car.index($(this));
		$(this).find("span").css({"padding":"5px 73px 81px 74px","transition":"all 0.3s","margin-top":"30px","color":"slateblue"});
	},function(){
		$(".mycarDiv span").css({"padding":" 5px 10px","color":"black"});
	});
	/*下拉菜单鼠标移入移出事件*/
	  $(".dropdown").hover(function(){//鼠标悬停触发事件
        $(this).addClass('open');
        },function(){
        	 $(this).removeClass('open');
        	 
        });
    /*番剧悬浮特效*/
   var $p;
   $(".mytableStyle .mytableTr td").hover(function(){
   	$p=$(this).find("p").html();
   	$(this).css({"background-color":"white","z-index":"99"});
   	$(this).find("p").html("2019 | 宫崎骏 <br />朝花夕誓出自于上世纪80年代的流行").css({"color":"#9D9D9D","width":"160px","transition":"all 0.3s"});	
   },function(){
   	$(this).find("p").html($p).css({"color":"#CCCCCC"}); 
   });
   
   /*电影排行榜效果*/
  
  inital();
  function inital(){
  	$(".myMoviceStatus .mycartoonMedia .media-left").hide().first().show();
  	$(".myMoviceStatus .mycartoonMedia .media-body p").hide().first().show();
  	$(".myMoviceStatus .mycartoonMedia .media-heading span").first().hide();
  	$(".myMoviceStatus .media-heading h5 i").css("display","inline").first().css("display","block");
  }
  $(".moviceClick").click(inital());
  $(".myMoviceStatus .mycartoonMedia .media").hover(function(){
  	$(this).find(".media-left,.media-body p").show();
  	$(this).siblings().find(".media-left,.media-body p").hide();
  	$(this).find(".media-heading span").hide();
  	$(this).siblings().find(".media-heading span").show();
  	$(this).find(".media-heading h5 i").css("display","block");
  	$(this).siblings().find(".media-heading h5 i").css("display","inline"); 	
  });
  
  /*音乐点击播放特效*/
 	var aud=new Audio();
 	aud.src="music/music02.mp3";
 	HTMLAudioElement.prototype.stop=function(){this.pause();this.currentTime=0.0}
 	$(".musicBegin,.musicBegin2").hover(function(){aud.play();$(this).attr("src","img/musicPhoto/musicEnd.png");
 	},function(){aud.stop();$(this).attr("src","img/musicPhoto/musicBegin.png");});
 	
 	movedome();
 	function movedome(){/*音乐简讯*/
		var marginTop=0;
		var stop=false;
		setInterval(function(){
			if(stop) return;
			$(".mymusicMedia").children(".media").first().animate({"margin-top":marginTop--},0,function(){
				var $first=$(this);
				if(!$first.is(":animated")){
					if((-marginTop)>$first.height()){
						$first.css({"margin-top":0}).appendTo($(".mymusicMedia"));
						marginTop=0;
					}
				}
			});
		},50);
		$(".mymusicMedia").mouseover(function(){stop=true;}).mouseout(function(){stop=false;});
	}
 	
 	/*右侧导航条固定事件*/
 	window.onresize=resizeBannerImage;//当窗口改变宽度时执行此函数
 	var winB=$(window).width();
 	$("#selector").css("left",(1900-380)-(1900-winB)/2+"px");
	function resizeBannerImage(){var winW = $(window).width();$("#selector").css("left",(1900-380)-(1900-winW)/2+"px");}
 	
 	/*图片进度条点击事件*/
 	$(".progress>div").hover(function(){
 		var $index=$(this).index();
 		var $img="img/picturePhoto/iframe0"+($index+2)+".jpg";
 		$("#mypictureImg").attr("src",$img);
 	},function(){
 		$("#mypictureImg").attr("src","img/picturePhoto/iframe01.jpg");
 	});
 	$(".progress>div").click(function(){
 		var $index=$(this).index();		
 		var $img="img/picturePhoto/photo0"+($index+1);	
 		$("#mypictureImg01").attr("src",$img+"1.jpg");
 		$("#mypictureImg02").attr("src",$img+"2.jpg");
 		setTimeout(function(){
 			$("#mypictureImg01").attr("src","img/picturePhoto/photo001.jpg");
 			$("#mypictureImg02").attr("src","img/picturePhoto/photo002.jpg");
 		},5000);
 	});

    /*图片推荐事件*/
 	var arrays=new Array("#00FFFF","#AFD9EE","#C1E2B3","#FFFF00","#D58512","gainsboro","#F7ECB5");
 	var index=0;
 	function picture(){
 		var rand = parseInt(Math.random() * 7);
 		index=parseInt(Math.random() * 34);
 		$(".mypictureDl dd a").eq(index).css({"color":arrays[rand]});
 		rand = parseInt(Math.random() * 7);
 		if(index>1){$(".mypictureDl dd a").eq(index-1).css({"color":arrays[rand]});}
 		index=parseInt(Math.random() * 34);
 		$(".mypictureDl dd a").eq(index).css({"color":arrays[rand]});
 		rand = parseInt(Math.random() * 7);
 		if(index>1){$(".mypictureDl dd a").eq(index-1).css({"color":arrays[rand]});}
 		setTimeout(function(){
 			$(".mypictureDl dd a").css({"color":"black"});
 		},150);		
 	}
 		setInterval(picture,200);
 	
 	/*小说动态*/
 	novelImg();
 	function novelImg(){
 		var flag=false;
 		setInterval(function(){
 		if(flag) return;
 		var $novel0=$("#myNovel0").attr("src");
 		var $novel1=$("#myNovel1").attr("src");
 		var $novel2=$("#myNovel2").attr("src");
 		var $novel3=$("#myNovel3").attr("src");
 		var $novel4=$("#myNovel4").attr("src");
 		var $novel5=$("#myNovel5").attr("src");
 		var $novel6=$("#myNovel6").attr("src");
 		var $novel7=$("#myNovel7").attr("src");
 		var $novel8=$("#myNovel8").attr("src");
 		var $novel9=$("#myNovel9").attr("src");
 		$("#myNovel0").attr("src",$novel1);
 		$("#myNovel1").attr("src",$novel2);
 		$("#myNovel2").attr("src",$novel3);
 		$("#myNovel3").attr("src",$novel4);
 		$("#myNovel4").attr("src",$novel5);
 		$("#myNovel5").attr("src",$novel6);
 		$("#myNovel6").attr("src",$novel7);
 		$("#myNovel7").attr("src",$novel8);
 		$("#myNovel8").attr("src",$novel9);
 		$("#myNovel9").attr("src",$novel0);
 		},3000);
 		$(".myNovelImg").hover(function(){flag=true;},function(){flag=false;});
 	}
 	
})
