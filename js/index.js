$(function () {
	//banner切换
	$(".IndexBanner").hide()
	$(".IndexBanner").eq(0).show()
	$(".BannerButton").eq(0).addClass("BannerButtonNow")
	var n=0;
	setInterval(function(){
		if(n<2){
			n=n+1;
		}
		else{
			n=0;	
		}
		$(".IndexBanner").hide();
		$(".IndexBanner").eq(n).fadeIn(400);
		$(".BannerButton").eq(n).addClass("BannerButtonNow").siblings().removeClass("BannerButtonNow");
	},4000)
	$(".BannerButton").mouseenter(function(){
		n=$(this).index();
		$(this).addClass("BannerButtonNow").siblings().removeClass("BannerButtonNow");
		$(".IndexBanner").hide();
		$(".IndexBanner").eq(n).stop(true,true).fadeIn(400);
	})
	
});	

//回到顶部
$(document).scroll(function(){
	if($(document).scrollTop()<=200){
		$(".TopBack").fadeOut();
	}
	else{
		$(".TopBack").fadeIn();
	}
})

$(".TopBack").click(function(){
	$(document).scrollTop(0);	
})

