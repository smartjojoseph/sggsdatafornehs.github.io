function login() {
var username = document.getElementById("username");
var pass = document.getElementById("password");
if (username.value == "") {
alert("請輸入使用者名稱");
} else if (pass.value  == "") {
alert("請輸入密碼");
} else if(username.value == "sggs" && pass.value == "1202"){
window.location.href="welcome.md";
} else {
alert("請輸入正確的使用者名稱和密碼！工程組在瞪你喔~!")
}
}
