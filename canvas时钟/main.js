(function () {
    var dom = document.getElementById('clock');
    var ctx = dom.getContext('2d');
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var r = width / 2;

    function drawBackground() {
        // 保存当前环境的状态。
        ctx.save();
        // 重定义原点位置
        ctx.translate(r, r);
        // 开始
        ctx.beginPath();
        ctx.arc(0, 0, width / 2 - 5, 0, 2 * Math.PI, false);
        ctx.lineWidth = 10;
        ctx.stroke();

        drawNumber();
    }

    function drawNumber() {
        // 画时钟数字
        var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        hourNumbers.forEach(function (ele, i) {
            let radius = 2 * Math.PI / 12 * i;
            let x = Math.cos(radius) * (r - 30);
            let y = Math.sin(radius) * (r - 30);
            ctx.fillText(ele, x, y);
        });

        // 画60个点
        for (let i = 0; i < 60; i++) {
            let radius = 2 * Math.PI / 60 * i;
            let x = Math.cos(radius) * (r - 15);
            let y = Math.sin(radius) * (r - 15);
            let r1 = 2;
            ctx.beginPath();
            if (i % 5 === 0) {
                ctx.fillStyle = '#000';
                r1 = 3;
            } else {
                ctx.fillStyle = '#aaa';
                r1 = 2;
            }
            ctx.arc(x, y, r1, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }

    function drawHour(hours, minutes) {
        ctx.save();
        ctx.beginPath();
        let rad = 2 * Math.PI / 12 * hours + 2 * Math.PI / 12 / 60 * minutes;
        ctx.rotate(rad);
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -width / 3);
        ctx.stroke();
        // 返回之前保存过的路径状态和属性。
        ctx.restore();
    }

    function drawMinute(minutes, seconds) {
        ctx.save();
        ctx.beginPath();
        let rad = 2 * Math.PI / 60 * minutes + 2 * Math.PI / 60 / 60 * seconds;
        ctx.rotate(rad);
        ctx.lineWidth = 3;
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -width / 2 + 33);
        ctx.stroke();
        ctx.restore();
    }

    function drawSecond(seconds) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#00ff00';
        let rad = 2 * Math.PI / 60 * seconds;
        ctx.rotate(rad);

        ctx.moveTo(-3, 20);
        ctx.lineTo(3, 20);
        ctx.lineTo(1, -r + 22);
        ctx.lineTo(-1, -r + 22);

        ctx.fill();
        ctx.restore();
    }

    function drawDot() {
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(0, 0, 4, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    function draw() {
        // 在给定的矩形内清除指定的像素。
        ctx.clearRect(0, 0, width, height);

        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        drawBackground();
        drawHour(hours, minutes);
        drawMinute(minutes, seconds);
        drawSecond(seconds);
        drawDot();

        ctx.restore();
    }

    draw();
    setInterval(draw, 1000);
})();
