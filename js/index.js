window.onload=function(){
    //无缝轮播	
	var win1=$(".window")[0];
	var imgs1=$("a",win1);
	// alert(imgs.length)
	var liss1=$("li",win1);
	var btns1=$(".btn",win1);
	wufenglunbo(win1,imgs1,liss1,btns1)
	
}


function wufenglunbo(win,imgs,liss,btns){
	var imgW=parseInt(getstyle(imgs[0],"width"));
	// alert(imgs.length)
	// alert(imgW)
//当前
	var index=0;
	//下一张
	var num=0;
	var flag=true;
	var t;
	liss[0].className='hotss';
	for(var i=0;i<imgs.length;i++){
		if(i==0){
			continue;//重新开始 从0开始
		}
		imgs[i].style.left=imgW+"px";
		

	}
	
	 t=setInterval(move,1500);
	 win.onmouseover=function(){
  	clearInterval(t)
	}
	win.onmouseout=function(){
  	t=setInterval(move,1500)
	}

	
	 //按钮
	 for(var i=0;i<liss.length;i++){
	 	liss[i].index=i;
	 	liss[i].onclick=function(){
	 		if(index==this.index){
	 			return;
	 		}
	 		for(var i=0;i<imgs.length;i++){
	 			liss[i].className='hots';
	 		}
	 		liss[this.index].className='hotss';
	 		imgs[this.index].style.left=imgW+"px";
	 		animate(imgs[index],{left:-imgW},600);
	 		animate(imgs[this.index],{left:0},600);
	 		index=num=this.index
	 	}
	 }

	 //btn
	 btns[0].onclick=function(){
	 	move();

	 }
	btns[1].onclick=function(){
	 	moveL();

	 }

	 function moveL(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=false;
	 	num--;
	 	if(num<0){
	 		num=imgs.length-1;
	 	}
	 	imgs[num].style.left=-imgW+"px";
	 	animate(imgs[index],{left:imgW},600,function(){
	 		flag=true
	 	})
	 	animate(imgs[num],{left:0},600);
	 	for(var i=0;i<imgs.length;i++){
	 	liss[i].className='hots';
	 }
	 	liss[num].className='hotss';
	 	 index=num
	 }

function move(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=false;
	 	num++;
	 	if(num==imgs.length){
	 		num=0;
	 	}
	 	imgs[num].style.left=imgW+"px";
	 	animate(imgs[index],{left:-imgW},600,function(){
	 		flag=true;
	 	});
	 	animate(imgs[num],{left:0},600);
	 	for(var i=0;i<imgs.length;i++){
	 	liss[i].className='hots';
	 }
	 liss[num].className='hotss';
	 	index=num
	 }
}


