window.onload = function(){
	var oPictTab = document.getElementById('tabPic');
	var oPicList = document.getElementById('listPic');
	var aNav = oPictTab.getElementsByTagName('nav')[0].children;
	var w = document.documentElement.clientWidth;
	var iNow = 0;
	var iX = 0
	var timer = null;

	timer = setInterval(function(){
		iNow++;
		// if(iNow>=5){
		// 	iNow=0;
		// }
		iNow = iNow%aNav.length;
		fnTab();

	}, 2000);

	bind(oPictTab,"touchstart",fnStart);

	function fnStart(ev){
		clearInterval(timer);
		alert(11);
	}



	function fnTab(){
		iX = -iNow*w;
		console.log(iX)
		oPicList.style.transition='0.5s';
		oPicList.style.WebkitTransform = 'translateX('+iX+'px)';
		for(var i=0;i<aNav.length;i++){
			aNav[i].className = '';
		};

		aNav[iNow].className = 'active';
	
	}
}