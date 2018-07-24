var oInput = document.getElementById("img");
var oUl = document.getElementById("input_ul");
var content_submit = document.getElementById("content");
oInput.onkeyup = function () {
    var item = oInput.value;
    var oScript = document.createElement("script");
    oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + item +"&cb=aa";
    document.body.appendChild(oScript);
    document.body.removeChild(oScript);
}
function aa (data) {
    oUl.innerText = "";
    var val = data.s;
    if (val.length !== 0) {
        val.forEach(function (ele, index) {
            var oLi = document.createElement("li");
            var oA = document.createElement("a");
            oA.href = "https://www.baidu.com/s?wd=" + ele;
            oA.innerText = ele;
            oLi.appendChild(oA);
            oUl.appendChild(oLi);
        })
        oUl.style.display = "block";
    }else {
        oUl.style.display = "none";
    }
}
function inputContent (e) {
    var e = window.event || e;
    var target = e.target;
    var val = target.firstElementChild.innerText;
    oInput.value = val;
    oUl.style.display = "none";
    content_submit.href = "https://www.baidu.com/s?wd=" + val;
}
oUl.addEventListener("click", inputContent, false);