function login() {
var username = document.getElementById("username");
var pass = document.getElementById("password");
if (username.value == "") {
alert("請輸入使用者名稱");
} else if (pass.value  == "") {
alert("請輸入密碼");
} else if(username.value == "sggs" && pass.value == "1202"){
window.location.href="welcome";
} else {
alert("請輸入正確的使用者名稱和密碼！工程組在瞪你喔~!")
}
}
document.onmousedown = function(e){
    if ( e.which == 2 ){// 滑鼠滾輪的按下，滾動不觸發
        return false;
    }
    if( e.which==3 ){// 滑鼠右鍵
        return false;
    }
}
document.onkeydown = function(){

        if (window.event && window.event.keyCode == 123) {
            event.keyCode = 0;
            event.returnValue = false;
        }
        if (window.event && window.event.keyCode == 13) {
            window.event.keyCode = 505;
        }
        if (window.event && window.event.keyCode == 8) {
            window.event.returnValue = false;
        }
    

    if( event.ctrlKey ){
        return false;
    }
    if ( event.altKey ){
        return false;
    }
    if ( event.shiftKey ){
        return false;
    }
}
