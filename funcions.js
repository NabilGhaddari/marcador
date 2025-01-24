let punts_a = 0;
let punts_b = 0;
let faltes_a = 0;
let faltes_b = 0;
let period1 = 1;
let historial1 = [];
// Variables

function inicializar() {
    punts_a = 0;
    punts_b = 0;
    faltes_a = 0;
    faltes_b = 0;
    period1 = 1;
    document.getElementById("points-a").innerHTML = 0;
    document.getElementById("points-b").innerHTML = 0;
    document.getElementById("fouls-a").innerHTML = 0;
    document.getElementById("fouls-b").innerHTML = 0;
    document.getElementById("period").innerHTML = 1;
    historial1 = [];
    const historialDiv = document.querySelector('.history');
    historialDiv.innerHTML = "<h2>Historial de la Partida<h2/>";
    //Inicia la partida i fa que l'historial torni a 0
}

function period() {
    // sumar períodes fins el cuatre i si empaten es posen un temps extra i quan guanya un equip es posa Fin
    // Quan canvies de període les faltes es reinicien
    if (period1 < 4) {
        period1 = period1 + 1;
        faltes_a = 0;
        faltes_b = 0;
        document.getElementById("fouls-a").innerHTML = 0;
        document.getElementById("fouls-b").innerHTML = 0;
        document.getElementById("period").innerHTML = period1;

    } else if (punts_a == punts_b) {
        period1 = "PE";
        document.getElementById("period").innerHTML = period1;

    } else if( punts_a > punts_b){
        period1 = "Fin";
        document.getElementById("period").innerHTML = period1;
    } else if( punts_a < punts_b) {
        period1 = "Fin";
        document.getElementById("period").innerHTML = period1;
    }

}

function sumar(n) {
    // Sumar punts a l'equip a
    punts_a = punts_a + n;
    document.getElementById("points-a").innerHTML = punts_a;
    actualitzar();
}

function suma(n) {
    // Sumar punts a l'equip b
    punts_b = punts_b + n;
    document.getElementById("points-b").innerHTML = punts_b;
    actualitzar();
}


function falta() {
    // Sumar faltes a l'equip a
    faltes_a = faltes_a + 1;
    document.getElementById("fouls-a").innerHTML = faltes_a;
}

function faltes() {
    // Sumar faltes a l'equip b
    faltes_b = faltes_b + 1;
    document.getElementById("fouls-b").innerHTML = faltes_b
}

function actualitzar() {
    // Tenim un nou registre
    let registre = punts_a + " - " + punts_b;
    //Seleccionam l'historial
    let historialDiv = document.querySelector(".history");
    //Posar el nou registre i en ordre

    historialDiv.innerHTML = "<p>" + registre + "</p>" + historialDiv.innerHTML;

}

