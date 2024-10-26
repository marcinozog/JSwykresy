let potega_val = 2;
// minimum i maksimum x dla obliczania wzoru potęgi
let potega_x_min = -5;
let potega_x_max = 5;

function draw_potega(ctx, color = 'black') {

    ctx.beginPath();

    let x = 0, y = 0;
    let x2 = 0, y2 = 0;

    // punkt początkowy wykresu
    y = Math.pow(potega_x_min, potega_val);
    x2 = potega_x_min * 100 + ctx.canvas.width / 2;
    y2 = ctx.canvas.height - (y * 100 + ctx.canvas.height / 2);
    ctx.moveTo(x2, y2);

    for (x = potega_x_min; x <= potega_x_max; x += 0.1) {
        y = Math.pow(x, potega_val);
        x2 = x * 100 + ctx.canvas.width / 2;
        y2 = ctx.canvas.height - (y * 100 + ctx.canvas.height / 2);
        ctx.lineTo(x2, y2);
        // console.log(x2, y2);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    //window.requestAnimationFrame(draw_sinus);
}

function draw_potega2(ctx, color = 'black') {

    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height / 2);

    for(let x = 0; x < ctx.canvas.width; x++) {
        let y = Math.pow(x, potega_val);
        ctx.lineTo(x, y + ctx.canvas.height / 2);
        console.log(x,y);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    //window.requestAnimationFrame(draw_sinus);
}

function draw_potega_text(ctx, color) {
    ctx.font = "50px Arial";
    ctx.fillStyle = color;
    ctx.fillText("f(x)=x^" + potega_val,10,80);
}

function change_potega_val(newVal) {
    potega_val = parseInt(newVal);
    refresh();
}