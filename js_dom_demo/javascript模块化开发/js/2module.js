/*
* @Author: 吴凯
* @Date:   2016-11-18 23:07:10
* @Last Modified by:   吴凯
* @Last Modified time: 2016-11-18 23:12:24
*/


define(function(require,exportx,module){ //sae下的参数不可以修改
	//exportx 对外提供接口
	function show(){
		alert(11);
	}
	exportx.show = show

})
/*function show(){
	alert('message')
}*/