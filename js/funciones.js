let productos = [
    {id:1, nombre: "Libro de vuelo de cuero negro", descripcion: "Libro de cuero negro de cuero artesanal, con 10 hojas de libro de vuelo y en su interior un cierre con compartimiento para credenciales", imagen:"https://argentinapilotshop.com.ar/2101-large_default/libro-de-vuelo.jpg", precio:15000, categoria:"para piloto"},
    {id:2, nombre: "Valija de vuelo T-Bag", descripcion: "Echa un vistazo a estas excelentes características: Poliéster 600D para una durabilidad extrema. Correa de hombro cómoda extraíble y ajustable Envuelva alrededor de manijas de maletín de gancho y bucle Forro de contraste para encontrar artículos más fácilmente Amplio compartimento interior con bolsillos para mantener organizados los artículos más grandes, organizador interior de bolsillo delantero con cordón y bolsillos para guardar artículos pequeños y libro de vuelo.", imagen:"https://argentinapilotshop.com.ar/1811-large_default/bolso.jpg", precio:25000, categoria:"para piloto"},
    {id:3, nombre: "Headset Bose A20 ANR con bluetooth", descripcion: "Los auriculares A20 están certificados según las normas FAA TSO C139. Se encuentra entre los auriculares activos con cancelación de ruido más ligeros, con un peso de solo 12 onzas. Ningún otro auricular ofrece esta combinación única de características y beneficios.", imagen:"https://d22fxaf9t8d39k.cloudfront.net/4162057ae088abbe1780a3a54cc4d46c7e5e48024fc9fe24ef833412ac3831d148024.png", precio:700000, categoria:"para piloto"},
    {id:4, nombre: "Fuel test cup", descripcion: "Taza transparente con un pasador de acero reforzado que funciona con la mayoría de los aviones, mide 2-1 / 2 de alto x 1-3 / 4 de diámetro, garantía de por vida", imagen:"https://argentinapilotshop.com.ar/1595-large_default/fuel-tester-cup-asa-.jpg", precio:20000, categoria:"para avion"},
    {id:5, nombre: "Calzas para ruedas", descripcion: "Un par de topes de rueda de plástico moldeado negro están conectados con una cuerda de nylon trenzada de 22 (50cm largo)de color amarillo brillante y negro que no se pudre ni retiene el agua. Las calzas inferiores mantienen el avión estacionado de forma segura, y el diseño cóncavo se adapta a cualquier neumático de avión", imagen:"https://argentinapilotshop.com.ar/1830-large_default/calzas-.jpg", precio:35000, categoria:"para avion"},
    {id:6, nombre: "Capota IFR ASA JiffyHood", descripcion:"El entrenamiento para IFR de ASA es cómodo, ligero y hace el trabajo a un precio razonable.Gris claro con correas ajustables negras; Una talla para todos", imagen:"https://argentinapilotshop.com.ar/1828-large_default/gafas-anteojos-capota.jpg", precio:60000, categoria:"para avion"},
    ];
    
    const guardarProductosLS = (productos) => {
        localStorage.setItem("productos", JSON.stringify(productos));
    }
    
    const cargarProductosLS = () => {
        return JSON.parse(localStorage.getItem("prdouctos")) || []
    }

    const renderProductos = () => {
        const prdouctos = cargarProductosLS(); 
        let html = "";
    
        productos.forEach(producto => {
            html += `<div class="col-md-4 mb-5 text-center"
            <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$${producto.precio}</p>
              <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar a carrito</a>
            </div>
          </div>
          </div>`
        })
    
        document.getElementById("contenido").innerHTML = html;
    }

    const renderCarrito = () => {
        const prdouctos = cargarCarritoLS(); 
        let html = `<table class="table"`;
    
        productos.forEach(producto => {
            html += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="64"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><img src="images/trash.svg" alt="Eliminar" width="24"></td>
            </tr>`;
        });
        
        html += `</table>`
        document.getElementById("contenido").innerHTML = html;
    }


    const cargarCarritoLS = (id) => {
        return JSON.parse(localStorage.getItem("carrito")) || []
    }
    
    
    const guardarCarritoLS = (carrito) => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    
    const agregarAlCarrito = (id) => {
        const carrito = cargarCarritoLS();
        const producto = buscarProducto(id);
        carrito.push(producto)
        guardarCarritoLS(carrito);
    }
    
    const buscarProducto = (id) => {
        const productos = cargarProductosLS();
        let producto = productos.find(item => item.id === id);
    
        return producto;
    }
    
    const estaEnCarro = (id) => {
        const productos = cargarProductosLS();
    
        return productos.some(item => item.id === id)
    }