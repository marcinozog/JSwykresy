let chart_type = "sinus";

window.onload = () => {
    refresh();
};

// odświeżenie wykresu
function refresh() {
    const canvas = document.getElementById("wykres_canv");
    const ctx = canvas.getContext("2d");

    // rysuj tło wykresu
    fill_chart(ctx, "grey");
    // rysuj współrzędne
    draw_axes(ctx, "red");
    

    if(chart_type == "sinus") {
        draw_sinus(ctx, "blue");
        draw_sinus_text(ctx, "green");
    }
    else if (chart_type == "potega") {
        draw_potega(ctx, "blue");
        draw_potega_text(ctx, "green");
    }
    else if (chart_type == "kwadrat") {
        draw_kwadrat(ctx, "blue");
        draw_kwadrat_text(ctx, "green");
    }
}

// rysuje osie współrzędnych
function draw_axes(ctx, color = 'black') {

    // szerokość i wysokość canvasu
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    
    // X
    ctx.moveTo(0, height/2);
    ctx.lineTo(width, height/2);
    
    // Y
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    
    ctx.stroke();
}

// rysuje tło wykresu
function fill_chart(ctx, color = 'black') {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// otwiera panel sterowania dla zadanej funkcji
function open_chart_panel(btn) {
    let type = btn.value;

    let controls = document.getElementsByClassName("controls");
    //ukrywamy wszystkie trackbary
    for (let i = 0; i < controls.length; i++) {
        controls[i].style.display = "none";
    }
    //pokazujemy wybtrane trackbary
    document.getElementById(type).style.display = "block";

    // zmieniamy kolory wszystkich przycisków wykresów na domyślne (niebieskie)
    let buttons = document.getElementsByClassName("btn-chart");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("button-red");
        buttons[i].classList.add("button-blue");
    }
    // ustawiamy kolor przycisku dla wybranego wykresu
    btn.classList.remove("button-blue");
    btn.classList.add("button-red");

    chart_type = type;
    refresh();
}

// zapisywanie wykresu
function download() {
    const canvas = document.getElementById("wykres_canv");
    // Konwertujemy canvas jako dane URL
    let canvasUrl = canvas.toDataURL();
    // Tworzymy element a
    const createEl = document.createElement('a');
    // Przypisujemy dane URL do adresu elementu a
    createEl.href = canvasUrl;

    // Podajemy nazwę pliku do pobrania
    createEl.download = "wykres_"+chart_type;

    // Wywołujemy kliknięcie elementu a
    createEl.click();
    // Usuwamy element a
    createEl.remove();
}