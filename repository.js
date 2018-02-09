function getNextElement(node) {                                             /*相邻元素节点获取函数*/
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

function insertAfter(newElement,targetElement) {                              /*节点后插入函数*/
    var pare = targetElement.parentNode;
    if (pare.lastChild == targetElement){
        pare.appendChild(newElement);
    }else{
        pare.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if(typeof window.onload == "function") {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }else{
        window.onload = func;
    }
}


/*平移动画*/
function setElementPosition(elementID,x,y) {
    var elem=document.getElementById(elementID);
    elem.style.position="absolute";
    elem.style.left=x+"px";
    elem.style.top=y+"px";
}

function moveElement(elementID,final_x,final_y,interval) {
    var elem=document.getElementById(elementID);        /*注意此处的参数*/
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos>final_x){
        xpos--;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";               /*字符串中嵌入变量的方法*/
    moment=setTimeout(repeat,interval);
}

