let kwadrat_val_a = -1;
let kwadrat_val_b = 0;
let kwadrat_val_c = 1;
// minimum i maksimum x dla obliczania wzoru funkcji kwadratowej
let kwadrat_x_min = -5.1;
let kwadrat_x_max = 5.1;

function draw_kwadrat(ctx, color = 'black') {

    ctx.beginPath();

    let x = 0, y = 0;
    let x2 = 0, y2 = 0;

    // punkt początkowy wykresu
    y = kwadrat_val_a * Math.pow(kwadrat_x_min, 2) + kwadrat_val_b * kwadrat_x_min + kwadrat_val_c;
    x2 = kwadrat_x_min * 100 + ctx.canvas.width / 2;
    y2 = ctx.canvas.height - (y * 100 + ctx.canvas.height / 2);
    ctx.moveTo(x2, y2);

    for (x = kwadrat_x_min; x <= kwadrat_x_max; x += 0.1) {
        y = kwadrat_val_a * Math.pow(x, 2) + kwadrat_val_b * x + kwadrat_val_c;

        x2 = x * 100 + ctx.canvas.width / 2;
        y2 = ctx.canvas.height - (y * 100 + ctx.canvas.height / 2);

        ctx.lineTo(x2, y2);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    //window.requestAnimationFrame(draw_sinus);
}

function draw_kwadrat_text(ctx, color) {
    ctx.font = "50px Arial";
    ctx.fillStyle = color;
    ctx.fillText("f(x)="+kwadrat_val_a+"x^2+"+kwadrat_val_b+"x+"+kwadrat_val_c,10,80);
}

function change_kwad_val_a(newVal) {
    kwadrat_val_a = parseFloat(newVal);
    refresh();
}

function change_kwad_val_b(newVal) {
    kwadrat_val_b = parseFloat(newVal);
    refresh();
}

function change_kwad_val_c(newVal) {
    kwadrat_val_c = parseFloat(newVal);
    refresh();
}