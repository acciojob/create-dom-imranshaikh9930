function createDom(root) {

	if(typeof root === "string"){
		return document.createTextNode(root);
	}

	const elemt = document.createElement(root.type);

	if(root.attributes){
		for(const[key,value] of Object.entries(root.attributes)){

			elemt.setAttribute(key,value);
		}
	}

	if(root.children){
		for(cont child of root.children){
			elemnt.appendChild(createDom(child))
		}
	}

	return elemt;

}

module.exports=createDom
