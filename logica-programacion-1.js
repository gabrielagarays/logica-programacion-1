// Conexión con el botón (ordenar) 
const button = document.getElementById("btnOrdenar");
button.addEventListener("click", ordenar);

// Función ordenar inputs variables / id html (num1, num2, num3)
function ordenar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

//* imprimir la variable "resultado" 
const resultado = document.getElementById("resultado");

// Lógica de comparación 
//El mayor gana todas sus comparaciones
//El menor pierde todas
//El del centro gana una y pierde una

 // Los 3 espacios DEBEN estar completos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultado.innerHTML = "Por favor, escribe los 3 números.";
        return;
    }

//¿y si los 3 son iguales?
 if (num1 === num2 && num2 === num3) {
        resultado.innerHTML = "Los tres números son iguales.";

//usamos el objeto math para encontrar el lugar de los numeros
} else {
//math.max para el mayor
        const mayor = Math.max(num1, num2, num3);
//math.min para el menor
        const menor = Math.min(num1, num2, num3);
// numero que queda por defaufl es el del medio
        const medio = num1 + num2 + num3 - mayor - menor;


// Muestra codigo HTML insertando id/variable  dentro del bloque resultado
    resultado.innerHTML = `
            <div class="bloque-resultado">
                <h1>Mayor a Menor</h1>
                <p>${mayor}, ${medio}, ${menor}</p>
            </div>

            <div class="bloque-resultado">
                <h1>Menor a mayor</h1>
                <p>${menor}, ${medio}, ${mayor}</p>
            </div>
        `;
    }
}