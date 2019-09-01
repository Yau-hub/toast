/**
 * 纯jst吐司（toast）
 * Created by yau on 2019/08/25.
 */



function Toast(option){
    this.bgColor = (option && option.bgColor) ? option.bgColor : this.option.bgColor;
    this.textColor = (option && option.textColor) ? option.textColor : this.option.textColor;
    this.radius = (option && option.radius) ? option.radius : this.option.radius;
    this.padding =  (option && option.padding) ? option.padding : this.option.padding;
    this.center = (option && option.center) ? option.center : this.option.center;
    this.bottom = (option && option.bottom) ? option.top : this.option.bottom;
    this.textSize = (option && option.textSize) ? option.textSize : this.option.textSize;
    this.text = (option && option.text) ? option.text : this.option.text;
    this.init();
};

/*默认值*/
Toast.prototype.option = {
    bgColor : "rgba(0,0,0,0.5)",
    textColor : "#ffffff",
    radius : "100px",
    padding : ["10px","20px","10px","20px"],
    center : false,
    bottom : "20%",
    textSize : "16px",
    text : ""
};

/*初始化*/
Toast.prototype.init = function () {
    this.toast = document.createElement("span");

    this.toast.setAttribute("style","display: inline-block; max-width: 80%;background-color: "+this.bgColor+";color: "+this.textColor+
        ";position: fixed;"+ "border-radius: "+this.radius+";font-size: "+this.textSize+
        ";padding: "+this.padding[0]+" "+ this.padding[1]+" "+this.padding[2]+" "+this.padding[3]+
    ";");

};

/*设置内容*/

/*设置显示*/
Toast.prototype.show = function () {
    var toast = this.toast;
    var body = document.getElementsByTagName("body")[0];
    var opacity = 1;
    body.appendChild(this.toast);
    toast.innerHTML = this.text;
    var windowW = document.body.clientWidth;
    var windowH = document.body.clientHeight;
    var objW = toast.offsetWidth;
    var objH =  toast.offsetHeight;

    if(this.center){
        toast.setAttribute("style",toast.getAttribute("style")+";top: "+((windowH/2) - (objH/2)) +"px; left: "+((windowW/2) - (objW/2)) +"px;");
    }
    else {
        toast.setAttribute("style",toast.getAttribute("style")+";bottom: "+this.bottom +"; left: "+((windowW/2) - (objW/2)) +"px;");
    }
    var show = setInterval(function () {

        opacity = opacity-0.02;
        if(opacity<=0){
            opacity = 0;
            clearInterval(show);
        }
        toast.setAttribute("style",toast.getAttribute("style")+";opacity:"+opacity);
    },45,1500)

};


