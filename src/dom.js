window.dom = {
    create(string){//创建新节点 万能创建方法
    const container =  document.createElement("template");
    //template标签是容纳所有元素
    container.innerHTML = string.trim();//trim（）把字符串两边的空格去掉
    return container.content.firstChild;//这样写才可以获取 记住
   },

    style(node,name,value){//用于修改style
        if(arguments.length===3){
            //dom.style(div,'color','red')
            node.style[name] = value
        }else if(arguments.length===2){
            if(typeof name === 'string'){
            // dom.style(div,'color')
            return node.style[name]
            }else if(name instanceof Object){//如果name是object的实例
                //dom.style(div,{color:'red'})
                const object = name
                for(let key in object){
                    // key:border/color
                    // node.style.border = ...
                    // node.style.color = ...
                    node.style[key] = object[key]
                }
            }
        }   
    },

    find(selector,scope){//用于获取标签或标签们
        return (scope || document).querySelectorAll(selector)
    },
    
    each(nodeList,fn){//遍历所有节点
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        let i
        for(i=0;i<list.length;i++){
           if(list[i] === node){
                break
            }
        }
        return i
    }
};             