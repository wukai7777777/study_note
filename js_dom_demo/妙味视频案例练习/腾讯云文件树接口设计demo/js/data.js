var data = {
	files:[
		{
			id:0,
			pid:-1,
			title:"微云",
			type:"file"
		},
		{
			id:1,
			pid:0,
			title:"我的文档",
			type:"file"
		},
		{
			id:600000,
			pid:0,
			title:"我的视频",
			type:"file"
		},
		{
			id:2,
			pid:0,
			title:"我的音乐",
			type:"file"
		},
		{
			id:3,
			pid:2,
			title:"周杰伦",
			type:"file"
		},
		{
			id:4000,
			pid:2,
			title:"王杰",
			type:"file"
		},
		{
			id:4,
			pid:3,
			title:"发如雪",
			type:"file"
		},
		{
			id:600,
			pid:3,
			title:"夜曲",
			type:"file"
		},
		{
			id:3000,
			pid:0,
			title:"我们的课程",
			type:"file"
		},
		{
			id:9000,
			pid:3000,
			title:"js初级课程"
		},
		{
			id:8000,
			pid:3000,
			title:"js初级课程"
		},
		{
			id:984744,
			pid:3000,
			title:"js中级课程"
		},
		{
			id:920485,
			pid:3000,
			title:"js高级课程"
		}
	]
}

const PID = -1;

function trees(data, PID) {
	let arr = [];
	for(let i=0; i<data.length; i++) {
		let item = data[i]
		if(item.pid === PID) {
			item.children = findChildren(item.id, data)
			arr.push(item)
		}
	}
	console.log('wukai',arr)
	return arr
}

function findChildren(id, data) {
	let children = []
	for(let i=0; i<data.length; i++) {
		// debugger
		let item = data[i]
		if(item.pid === id) {
			item.children = []
			let childs = findChildren(item.id, data)
			// 还有子集
			if(childs.length > 0) {
				item.children = childs
			}
			children.push(item)
		}
	}
	return children
}

