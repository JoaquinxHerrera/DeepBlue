const carritoResumen = document.getElementById("carritoResumen");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const numeroCarrito = document.getElementById("numeroCarrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Agregar evento de clic al botón de la barra de navegación
  navbarToggler.addEventListener('click', function() {
      // Alternar la clase 'show' en el menú desplegable
      navbarCollapse.classList.toggle('show');
  });

  // Agregar evento de clic a la ventana
  window.addEventListener('click', function(event) {
      const target = event.target;

      // Verificar si el clic ocurrió dentro o fuera del menú desplegable
      const isClickInsideNavbarCollapse = navbarCollapse.contains(target);
      const isNavbarToggler = target === navbarToggler;

      // Si el clic está fuera del menú desplegable y del botón de la barra de navegación y el menú está abierto, cerrarlo
      if (!isClickInsideNavbarCollapse && !isNavbarToggler && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
      }
  });
});

const getProducts = async () =>{
  const response = await fetch("../productos.json");
  const data = await response.json();

  data.forEach((product)=>{
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
    let tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
      <img src="${product.urlImg}" alt="">
      <div>
        <h3 class="tituloTarjeta">${product.nombre}</h3>
      </div>
      <div class="contenidoCuerpo">
        <div class="precio"> ${product.precio}<span>US$</span></div> <div class="inStock">  In stock: ${product.stock}</div>
      </div>
      `
    contenedorTarjetas.append(tarjeta);
    
    let comprar= document.createElement("button");
    comprar.innerText = "Add to cart";
    comprar.className = "comprar";
    tarjeta.append(comprar);
  
    comprar.addEventListener("click", ()=>{
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
      console.log(repeat);
      if (repeat){
        carrito.map((prod) => {
          if (prod.id === product.id){
            prod.cantidad++;
          }
        });
      }else{
          carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            urlImg: product.urlImg,
            cantidad: product.cantidad,
            stock: product.stock,
          });
          localStorage.setItem("carrito",JSON.stringify(carrito));
          Toastify({
            text: "The product was successfully added to cart!",
            duration: 3000,
            gravity: "bottom",
            position:"right",
            style: {
              background: '#F19A17',
              color: 'white',
            }
          }).showToast(); 
        console.log(carrito);
        carritoCounter();
      }
    })
  });

}
getProducts();

const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display="flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modalHeader";
  modalHeader.innerHTML= `
  <h1 class= "modalHeaderTitle">Cart</h1>
  <div>
    <img class="lineaCart" src="../assets/img/LineaCart (2).svg" alt="">
  </div>
  
  `;
  modalContainer.append(modalHeader);

  const modalButton= document.createElement("h1");
  modalButton.innerText="x";
  modalButton.className="modalHeaderButton";

  modalButton.addEventListener("click",() => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((product) =>{
    let carritoContent = document.createElement("div");
    carritoContent.className = "modalContentOut";
    carritoContent.innerHTML = `
    <div class="modalContent">
      <div class="imgCart">
        <img src="${product.urlImg}">
      </div>
      <div class="contentCart">
        <div class="primeraFila">
          <div class="contentCartIzquierda">
            <h3>${product.nombre}</h3>
          </div>
          <div class="contentCartDerecha">
            <div class="precio">
              <p>${product.precio} $</p>
            </div>
            <div class="precioTotal">
              <p>Total: ${product.cantidad * product.precio}</p>
            </div>
            <span>
              <img class="deleteProduct" src="../assets/img/EliminarProduct.png" alt="">
            </span>
          </div>
        
        </div>
        <div class="segundaFila">
          <div class="cantidades">
            <span class="restar"> - </span>
            <p>Quantity: ${product.cantidad}</p>
            <span class="sumar"> + </span>
          </div>
          <p class="inStockCart">In stock: ${product.stock}</p>
        </div>
      </div>
    </div>
    
    <img class="lineaCartProduct" src="../assets/img/LineaCart (2).svg" alt="">
    `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", ()=>{
      if(product.cantidad !== 1){
        product.cantidad--;
      }
      localStorage.setItem("carrito",JSON.stringify(carrito));
      pintarCarrito();
       
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      if (product.cantidad < product.stock) {
        product.cantidad++;
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".deleteProduct");
    eliminar.addEventListener("click", ()=>{
      eliminarProducto(product.id);

    })
  });
  
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "totalContent";
  totalBuying.innerHTML=`
                        <div>
                          Subtotal: <b>${total} $</b>
                        </div>  
                        <div>
                          <button class="checkoutButton">Proceed to Checkout</button>
                        </div> 

                        
  `;

  modalContainer.append(totalBuying);

  let checkoutButton = totalBuying.querySelector(".checkoutButton");
  checkoutButton.addEventListener("click",() => {
    
    Swal.fire({
      icon: 'success',
      title: 'Thanks for your purchase!',
      text: `Order Number: # ${getRandomInt(1000000)}`,
      color:'white',
      background: '#17252D',      
    })
    eliminarTodosProductos();
    modalContainer.style.display = "none";
  });
};

verCarritoButton.addEventListener("click", pintarCarrito);
  
const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  localStorage.setItem("carrito",JSON.stringify(carrito));
  pintarCarrito();
};

const eliminarTodosProductos = () => {
  carrito = []; 
  localStorage.removeItem("carrito");
  carritoCounter(); 
  pintarCarrito(); 
};
const carritoCounter = () =>{
  numeroCarrito.style.display = "block";
  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  numeroCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter ();
