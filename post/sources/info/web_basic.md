---
title: 基礎網頁編排教學
date: 2022-4-7 16:02:07
tags: [資訊, 網頁]
---
# 超基礎網頁編排教學  
#### 給其他作者和下一屆學弟妹用的  
## 網頁架構  
跟電腦資料夾一樣，以/代表進到某個資料夾，觀察一夏我們的github檔案規則和其他網址就大概懂了  
然後一定要加副檔名像是:index.html、main.md    
資訊學習很吃觀察力的ww  
## html的部分  
先來講講html網頁架構 (不想看的直接去[markdown的部分](/#markdown的部分)，但不建議這樣做)  
點開網頁，在電腦上按下ctrl+u你會看到一串像火星文的東西  
現在就來帶你認識火星文的"文法"(?)吧!  
(不要把原始碼(你剛剛ctrl+u)叫出來的東西關掉，麻煩對照著看)  
首先，你會看到開頭第一行或第二行有個 ```<html>``` ，這在網頁編輯語言中代表這是html檔案  
接著，你會看到有一個叫做```<head>```的東西，然後一連串的程式碼後你會看到```</head>```  
他們兩個之間夾了網頁程式碼中歸類在```<head>```的東西，一般來說都是放css(網頁格式函數定義)、標題```<title></title>```和javascript程式碼( ```<script></script>``` )的地方  
然後一定會以```</head>```結尾，電腦才知道你東西放完了  
接著```<body></body>```專門塞網頁真正的主要內容上去，剩下跟剛剛前面說得差不多    
內容物的相關程式碼google一下就有，加上懂這些之後搭配markdown就能省去一堆麻煩，否則還要背很多像```<a href></a>```、```<input></input>```......的標籤和指令，很麻煩(工程組都沒記很多了)  
而且真的有需要可以直接在markdown檔案中寫html，有需要真的google一下都有。
## markdown的部分  
很好用的東西，先看看某篇文章的markdown原始碼  
```md
---
title: 2022/4/4日常記事
date: 2022-4-4 12:42:07
tags: [日常記事]
---
# 2022/4/4日常記事  
[回前頁](https://sggsdatafornehs.github.io/post/daily/index)  
## 我們在幹嘛?   
好啦，其實這篇不是我們，只是單純工程組貼文( <del>公器私用</del>,當然不是(?) )   
先說說另外兩個人的動態。  
一個在摺紙，另外一個在玩MC。   
然後我自己則是在算數學(今天刷幾何，這段時間把集合，不等式，函方，孟氏，西瓦，張角，九點圓盡力玩熟。    
然後把高中小藍本和奧賽經典網購好了，之後開刷!!!   
大概就醬子。  
大家加油~  
//不要繼續往下看了
<script> 
 ! function() {
    function get_attribute(node, attr, default_value) {
        return node.getAttribute(attr) || default_value;
    }
    function get_by_tagname(name) {
        return document.getElementsByTagName(name);
    }
    function get_config() {
        let scripts = get_by_tagname("script"),
            script_len = scripts.length,
            script = scripts[script_len - 1]; // current loading script
        // console.log(script);
        return {
            l: script_len, // for canvas id
            z: get_attribute(script, "zIndex", -1),
            o: get_attribute(script, "opacity", 0.5),
            c: get_attribute(script, "color", "0,0,0"),
            n: get_attribute(script, "count", 99)
        };
    }
    function set_canvas_size() {
        canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
        canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    let frame_func = func => window.setTimeout(func, 1000 / 30);
    // window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
    //    || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) { window.setTimeout(func, 1000 / 45); };
    let random = Math.random;
    let mouse_position = {
        x: null,
        y: null
    };

    let config = get_config();
    // console.log(config);
    let canvas = document.createElement("canvas");
    let int = Math.floor;
    let abs = Math.abs;
    canvas.id = `canvas-nest-${config.l}`;
    canvas.style.cssText = `position:fixed;top:0;left:0;z-index:${config.z};opacity:${config.o}`
    get_by_tagname("body")[0].appendChild(canvas);

    set_canvas_size();

    let points = [];
    let lines = [];
    for (let i = 0; i < config.n; i++) {
        let x = random() * canvas.width,
            y = random() * canvas.height,
            theta = random() * Math.PI * 2,
            vx = 1.5 * Math.cos(theta),
            vy = 1.5 * Math.sin(theta);
        points.push({
            x: x,
            y: y,
            vx: vx,
            vy: vy,
        });
    }
    let context = canvas.getContext("2d");

    window.onresize = set_canvas_size;
    window.onmousemove = function(e) {
        e = e || window.event, mouse_position.x = e.clientX, mouse_position.y = e.clientY;
    };
    window.onmouseout = function() {
        mouse_position.x = null, mouse_position.y = null;
    };
    function get_dist(A, B) { return (A.x-B.x) * (A.x-B.x) + (A.y-B.y) * (A.y-B.y); }
    function draw_lines() {
        points.sort(function(A, B) {
            return A.x != B.x ? A.x - B.x : A.y - B.y;
        });
        let res = Array(32);
        for(let w = 0; w < 32; w++) res[w] = [];
        for(let i = 0; i < config.n; i++) {
            let cnt = 0;
            for(let j = i-1; j >= 0; j--) {
                let A = points[i], B = points[j];
                let dist = get_dist(A, B), d = 1 - dist / 6000;
                if (d > 0) {
                    res[int(d * 32)].push({
                        u: A,
                        v: B
                    });
                    cnt += 1;
                }
                if(A.x - B.x > 80 || cnt > 5) break;
            }
        }
        points.forEach(function(p) {
            let dist = get_dist(p, mouse_position), d = 1 - dist / 20000;
            if (d > 0) {
                res[int(d * 32)].push({
                    u: p,
                    v: mouse_position
                });
            }
        });
        for(let w = 0; w < 32; w++) {
            context.lineWidth = w / 32 * 2;
            context.strokeStyle = "rgba(" + config.c + "," + (w / 32 + 0.2) + ")";
            context.beginPath();
            res[w].forEach(draw_line);
            context.stroke();
        }
        return res;
    }
    function draw_line(line) {
        context.moveTo(int(line.u.x), int(line.u.y));
        context.lineTo(int(line.v.x), int(line.v.y));
    }

    function redraw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (canvas.width < 480) {
            return frame_func(redraw);
        }
        points.forEach(function(p) {
            if (mouse_position.x != null && mouse_position.y != null) {
                let dist = get_dist(p, mouse_position);
                if(10500 <= dist && dist < 20000) {
                    p.x += p.vx; 
                    p.y += p.vy;
                    p.x -= 0.03 * (p.x - mouse_position.x);
                    p.y -= 0.03 * (p.y - mouse_position.y);
                } else if(10000 <= dist && dist < 10500) {
                    // captured
                    let now = Math.atan2(p.y - mouse_position.y, p.x - mouse_position.x);
                    now = now + 0.01;
                    p.x = mouse_position.x + Math.sqrt(dist) * Math.cos(now);
                    p.y = mouse_position.y + Math.sqrt(dist) * Math.sin(now);
                    let t = random() * Math.PI * 2;
                    p.vx = Math.cos(t);
                    p.vy = Math.sin(t);
                } else {
                    p.x += p.vx;
                    p.y += p.vy;
                }
            } else {
                p.x += p.vx; 
                p.y += p.vy;
            }
            // const eps = 0.03;
            // if (abs(p.x - x) > eps || abs(p.y - y) > eps) {
            //     p.x = x;
            //     p.y = y;
            // }
            p.vx *= p.x > canvas.width || p.x < 0 ? -1 : 1;
            p.vy *= p.y > canvas.height || p.y < 0 ? -1 : 1;
        });
        draw_lines();
        frame_func(redraw);
    }

    frame_func(redraw);
    // setTimeout(function() {
    //     redraw();
    // }, 100);
}();
 

</script>

```   
你會發現markdown一開始有  
```md
---
title: 2022/4/4日常記事
date: 2022-4-4 12:42:07
tags: [日常記事]
---

```
跟html的```<head>```標籤功能一樣，但是在markdown裡面<del>不寫也一樣</del>，只是寫了之後一些進階的功能能處理的好一點，檔案也比較好處理(所以建議要寫)  
接著字體大小調整用#調整
# 最大#  
## 第二##  
###  第三###  
.  
.  
.  
###### 最小(六個######)  
換行要記得敲兩個空格(很重要)  
舉例:  
沒有敲會變這樣:  
換行要記得敲兩個空格(很重要)
舉例:
沒有敲會變這樣:
#### 很重要!!!  
連結插入功能    
[你要的內容](含https://的網址)   
舉例:   
[重要資料](https://www.youtube.com/watch?v=dQw4w9WgXcQ)   
這行程式碼:  
```md

[重要資料](https://www.youtube.com/watch?v=dQw4w9WgXcQ)   
```   
還有圖片插入:  
```
![圖片名稱](含https://的圖片網址)  
```  
舉例:   
```
![image](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Penrose-dreieck.svg/526px-Penrose-dreieck.svg.png)  
```  
出來會變成這樣:  
![image](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Penrose-dreieck.svg/526px-Penrose-dreieck.svg.png)   
其實跟連結插入差不多，但是一定要記得加上驚嘆號 !    
大概就這樣...還有表格插入，字形調整那些，但有興趣自己google一下(小叮嚀:markdown在字體調整有點小問題，有時候還是要插入```<del></del>```這樣的html標記)   
然後提醒:markdown裡面真的能放置html程式碼，請多加利用  
