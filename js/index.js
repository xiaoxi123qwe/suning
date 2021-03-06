//banner图
{
	const imgs=document.querySelectorAll(".banner_tu li");
	const pagers=document.querySelectorAll(".banner_dian_main li");
	const banner=document.querySelector(".banner");
	const next=document.querySelector(".btn_right");
	const prev=document.querySelector(".btn_left1");
	//选项卡  点击轮播点进行图片切换
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for (let i = 0; i <imgs.length; i++) {
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	//自动轮播
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if (n===imgs.length) {
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for (let i = 0; i <imgs.length; i++) {
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			pagers[n].classList.add("active");
			imgs[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	let flag=true;
	//点击下一个箭头
	next.onclick=function(){
		if (flag) {
			flag=false;
			move();
		}
	}
	//点击上一个箭头
	prev.onclick=function(){
		if (flag) {
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		});
	})
}
//topbar  leftbar
{
	//topbar
	let topbar=document.querySelector(".topbar");
	let liebiao=document.querySelector(".fenlei_liebiaotb");
	let liebiao2=document.querySelector(".fenlei_liebiao2tb");
	let leftbar=document.querySelector(".leftbar");
	let totop=document.querySelector(".leftbar_fanhui");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if (st>1200) {
			topbar.style.display="block";
			liebiao.onmouseenter=function(){
				liebiao2.style.display="block";
			}
			liebiao.onmouseleave=function(){
				liebiao2.style.display="none";
			}
		}else{
			topbar.style.display="none";
		}
		if (st>2500) {
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
	totop.onclick=function(){
		document.documentElement.scrollTop=0;
	}

	//leftbar
	let tips=document.querySelectorAll(".leftbar_menu");
	let container=document.querySelectorAll(".container");
	var flag=true;
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			flag=false;
			let ot=container[index].offsetTop-70;
			let now=document.documentElement.scrollTop;
			// document.documentElement.scrollTop=ot;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if (time===200) {
					clearInterval(t);
					flag=true;
				}
				document.documentElement.scrollTop=now;
			}, 25);
		}
	});
	window.addEventListener("scroll", function(){
		if(flag){
			let st=document.documentElement.scrollTop;
			for (let i = 0; i <container.length; i++) {
				if(st>=container[i].offsetTop-70){
					for (let i =0;i< tips.length; i++) {
						tips[i].classList.remove("active");
					}
					tips[i].classList.add("active");
				}
			}
		}		
	});
}
//排行榜
{
	let next=document.querySelector(".haohuo_next");
	let prev=document.querySelector(".haohuo_prev");
	let inner=document.querySelector(".haohuo_inner");
	let items=document.querySelectorAll(".haohuo_bottom_main");
	let pages=document.querySelectorAll(".paihang_dian1");
	let n=1;
	let obj=pages[1];
	const l=pages.length;
    let flag=true;
    function move(){
        if(flag===false){
            inner.style.transition="all .5s ease";
            inner.style.marginLeft=-370*n+"px";
        }
    }
    next.onclick=function () {
        if(flag){
            flag=false;
            n++;
            move();
        }
    };
    prev.onclick=function () {
        if(flag){
            flag=false;
            n--;
            move();
        }
    };
	inner.addEventListener("transitionend", function(){
		flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-370px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1110px";
            n=3;
        }
        if(n>0&&n<4){
            for (let i = 0; i <l; i++) {
                pages[i].classList.remove("paihang_dian2");
            }
            pages[n-1].classList.add("paihang_dian2");
        }else if(n===0){
            for (let i = 0; i <l; i++) {
                pages[i].classList.remove("paihang_dian2");
            }
            pages[3].classList.add("paihang_dian2");
        }else if(n===4){
            for (let i = 0; i <l; i++) {
                pages[i].classList.remove("paihang_dian2");
            }
            pages[1].classList.add("paihang_dian2");
        }
	});
	pages.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.classList.remove("paihang_dian2");
			ele.classList.add("paihang_dian2");
			obj=ele;
			inner.style.marginLeft=-(index+1)*370+"px";
			n=index+1;
		}
	})
}
//视频
{
	let next=document.querySelector(".shengxian_next");
	let prev=document.querySelector(".shengxian_prev");
	let inner=document.querySelector(".shengxin_inner");
	let items=document.querySelectorAll(".shipin_more");
	let tips=document.querySelectorAll(".shipin_more1");
	let content=document.querySelectorAll(".shipin_content1");
    let n=1;
    let obj=tips[0];
    const l=items.length;
    let flag=true;
    function move(){
        if(flag===false){
            inner.style.transition="all .5s ease";
            inner.style.marginLeft=-390*n+"px";
        }
    }
    next.onclick=function () {
        if(flag){
            flag=false;
            n++;
            move();
        }
    };
    prev.onclick=function () {
        if(flag){
            flag=false;
            n--;
            move();
        }
    };
    inner.addEventListener("transitionend", function(){
        flag=true;
        if(n===3){
            inner.style.transition="none";
            inner.style.marginLeft="-390px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-780px";
            n=2;
        }
    });
    tips.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.classList.remove("active");
            ele.classList.add("active");
            obj=ele;
            content[index].classList.add("active");
            // n=index;
        }
        ele.onmouseleave=function(){
            content[index].classList.remove("active");
        }
    })
}
//banner侧边框
{
	let labels=document.querySelectorAll(".fenlei_liebiao2 li");
	let menus=document.querySelectorAll(".fenlei_content");
	let obj=menus[0]
	labels.forEach(function(ele,index){
		ele.onmouseover=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//乐拼购
{
		const prev=document.querySelector(".qingdan_prev");
		const next=document.querySelector(".qingdan_next");
		const inner=document.querySelector(".qigdan_inner");
		let n=0;
		next.onclick=function(){
			n++;
			prev.classList.remove("disable");
			if (n===2) {
				this.classList.add("disable");
			}
			if (n===3) {
				n=2;
				return;
			}
			inner.style.marginLeft=-555*n+"px";
		}
		prev.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				this.classList.add("disable");
			}
			if (n===-1) {
				n=0;
				return;
			}
			inner.style.marginLeft=-555*n+"px";
		}
	
}
//右侧
{
    let totop=document.querySelector(".right_item_top");
    totop.onclick=function(){
        document.documentElement.scrollTop=0;
    }
}