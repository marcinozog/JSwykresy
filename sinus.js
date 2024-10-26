let sinus_amp = 1;
let sinus_freq = 1;
// minimum i maksimum x dla obliczania wzoru sinusa
let sinus_x_min = -5;
let sinus_x_max = 5;

function draw_sinus(ctx, color = 'black') {

    ctx.beginPath();

    let x = 0, y = 0;
    let x2 = 0, y2 = 0;

    // punkt początkowy wykresu
    y = sinus_amp * Math.sin(sinus_x_min * sinus_freq);
    x2 = sinus_x_min * 100 + ctx.canvas.width / 2;
    y2 = ctx.canvas.height - (y * 100 + ctx.canvas.height / 2);
    ctx.moveTo(x2, y2);

    for (x = sinus_x_min; x <= sinus_x_max; x += 0.1) {
        y = sinus_amp * Math.sin(x * sinus_freq);
        x2 = x * 100 + ctx.canvas.width / 2;
        y2 = ctx.canvas.height - (y * 100 + ctx.canvas.height / 2);
        ctx.lineTo(x2, y2);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    //window.requestAnimationFrame(draw_sinus);
}

function draw_sinus_text(ctx, color) {
    ctx.font = "50px Arial";
    ctx.fillStyle = color;
    ctx.fillText("f(x)="+sinus_amp+"*sin(x*"+sinus_freq+")",10,80);
}

function change_sinus_amp(newVal) {
    sinus_amp = parseFloat(newVal);
    refresh();
}

function change_sinus_freq(newVal) {
    sinus_freq = parseFloat(newVal);
    refresh();
}