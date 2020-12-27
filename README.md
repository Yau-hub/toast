# toast
js封装一个简单的toast兼容ie9+

使用方法：

1）引入js组件

下载好toast.js放置在项目index.html同级目录下使用script标签引入
<script src="toast.js"></script>

2）配置使用

  var toast = new Toast({
  
      text : "提示",    //toast提示文本
      
      center: false,    //是否显示在屏幕中间
      
      top: "90%",        //距离屏幕顶部的距离
      
      bgColor: "#000",    //toast背景颜色
      
      textSize: "14x",    //提示文本字体大小
      
      time: "1000",       //toast显示到消失的时长ms
      
      radius: "100px",       //toast边框圆角
      
      textColor: "#ffffff",   //toast提示文本字体颜色
      
      padding: ["10px","20px","10px","20px"], //toast四边内边距上右下左
      
  });
  
  toast.show();

  --结束
  

