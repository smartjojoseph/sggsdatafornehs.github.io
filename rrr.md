# 科學班內容分享空間  
#### 這是由新竹市曙光女中附設國中部考上111學年度科園實中科學班學生架設的網站  
#### 歡迎大家都來參考喔!!!   
<div class="alert alert-info alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert">
        <span aria-hidden="true">×</span>
        <span class="sr-only">Close</span>
      </button>
      <strong></strong> <b><font color="red">最新消息</font></b> <a href="https://sggsdatafornehs.github.io/post/sources/">講解和教學區</a>上線囉！ 
    </div> 
點擊數  
<!-- hitwebcounter Code START -->
<a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=7969854&style=0024&nbdigits=7&type=page&initCount=60" title="Free Counter" Alt="web counter"   border="0" /></a>                                       
                                    
                                        
                                          
                            
## 分類  
[1.心得](#%E5%BF%83%E5%BE%97)    
[2.我們的資源](#%E5%BF%83%E5%BE%97)    
[3.我們的日常](#我們的日常)  
[4.404頁面](#404%E9%A0%81%E9%9D%A2)    
[5.講解和教學區](3#%E8%AC%9B%E8%A7%A3%E5%92%8C%E6%95%99%E5%AD%B8%E5%8D%80)

## 心得    
[點我:https://sggsdatafornehs.github.io/%E5%BF%83%E5%BE%97/index](https://sggsdatafornehs.github.io/%E5%BF%83%E5%BE%97/index)

## 我們的資源
 [請先登入，點此進入](https://sggsdatafornehs.github.io/testing/login-system/)
 
<h2 id="我們的日常">我們的日常<a class="anchorjs-link " href="#我們的日常" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h2>  
 [點我https://sggsdatafornehs.github.io/post/daily/index](https://sggsdatafornehs.github.io/post/daily/index)
  
<h2 id="404頁面">404頁面<a class="anchorjs-link " href="#404頁面" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h2>    
 [點我:https://sggsdatafornehs.github.io/404.html](https://sggsdatafornehs.github.io/404.html)   
 <h2 id="講解和教學區">講解和教學區<a class="anchorjs-link " href="#講解和教學區" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h2>    
 數學、物理、化學、資訊放的地方  
 [點我:https://sggsdatafornehs.github.io/post/sources/](https://sggsdatafornehs.github.io/post/sources/)  

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
 <div class="commentbox"></div>
<script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
<script>commentBox('5681092233265152-proj')</script>
 
 
 
 
 
  ![我們的榜單](https://sggsdatafornehs.github.io/image/2022330417653_pages-to-jpg-0001.jpg)  
