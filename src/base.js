


// 取得css样式表
// 通过增加link节点的方式添加
// @css_url： 样式表url

function getCss(css_url) {

    var style = document.createElement('link');
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", css_url);
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!window.createPopup) { /* For Safari */
        style.appendChild(document.createTextNode(''));
    }

    //  console.log(mycss)
}
getCss("../main.css");



//添加h1元素和返回按钮
function getTitle() {
    var title = document.getElementsByTagName('title')[0].innerHTML;
    // console.log(title);
    var myTitle = document.createElement('h1');
    myTitle.innerHTML = title;
    var oA = document.createElement("a");
    oA.innerHTML="返回";
    oA.setAttribute("href","../index.html");
    // console.log(myTitle);
    window.onload = function () {
        var body = document.getElementsByTagName('body')[0];
        var tag = document.getElementsByTagName('h2')[0];
        body.insertBefore(myTitle,tag);
        body.insertBefore(oA,tag);
        // header.appendChild(myTitle);
        // header.appendChild(oA);
    }


}
getTitle();


