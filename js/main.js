//Paquetes
const A = {
    nombre:"Snorkeling",
    precio:60,
}

const B = {
    nombre:"Shipwreck",
    precio:100,
}

const C = {
    nombre:"Dive with sharks",
    precio:120,
}

let contadorA = 0;
let contadorB = 0;
let contadorC = 0;

function saludar() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    alert("¡Bienvenido " + nombre + " " + apellido +"!");
}

saludar();

alert("Los paquetes disponibles son: A--> Snorkeling x $60 / B--> Shipwreck x $100 / C--> Dive with sharks x $120");


let paquetes = prompt("Ingrese el paquete deseado y si quiere salir usar ESC");
do{
    alert(paquetes + " fue agregado al carrito con exito!")
    if(paquetes != "ESC"){
        paquetes = prompt("Ingrese el paquete deseado o use ESC si quiere finalizar la compra");
        if(paquetes === "A"){
            contadorA = contadorA + 1;
        }
        if(paquetes === "B"){
            contadorB = contadorB + 1;
        }
        if(paquetes === "C"){
            contadorC = contadorC + 1;
        }
    }
}


while(paquetes != "ESC")
let subtotal = contadorA*A.precio + contadorB*B.precio + contadorC*C.precio;
alert("Resumen del carrito. - Paquete A (Snorkeling): " + contadorA + " / - Paquete B (Deep sea diving): " + contadorB + " / - Paquete C (Shark diving): " + contadorC + ". Subtotal: " + subtotal);


