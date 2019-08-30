$(function(){
	$('.iphone_img').mouseenter(function(){
		var obj = event.target;
		$(obj).fadeOut(500).fadeIn(500);
	})
});
document.addEventListener('mousemove',function(e){
	var start = document.querySelector("#startflash")
	start.style.top = (e.clientY-20)+"px";
	start.style.left = (e.clientX-20)+"px";
})
document.addEventListener('mousemove',function(e){
	var $start = $("#startflash")
	$start.fadeOut(500)
	$start.fadeIn(500)
})
