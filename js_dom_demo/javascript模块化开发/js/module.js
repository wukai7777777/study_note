
define(function(require,exports,module){ //sea下的参数不允许修改，并且顺序也不能颠倒
	function show(){
		alert('message');
	}
});
function show(){
	alert(22222);
}