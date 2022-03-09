cards = document.getElementById('resultado');

function cargarProductos(){
fetch('productos.json')
    .then(respuesta=>respuesta.json())
    .then(productos=>{
        productos.forEach(producto=>{
            div=document.createElement('div');
            div.classList.add('product')
            text=producto.nombre;
            img=producto.imagen;
            id=producto.id;
            html='';
            html+= `<div class="card__face card__face--front">
                                <h3>${text}</h3>
                                <img src="${img}" alt="" />
                            </div>
                            <div   class="card__face card__face--back">
                                <a class="boton-ver" onclick="mostrarProducto(${id})">Ver Producto</a>
                                <table id="keywords-1" cellspacing="0" cellpadding="0">
                                <thead>    
                                <tr>
                                    <th><span>Modelo</span></th>
                                </tr>
                            </thead>
                        <tbody>`;
            for(let i=0;i<producto.modelos.length;i++){
                modelo=producto.modelos[i];
                html+= `<tr>
                            <td class="lalign">${modelo}</td>
                        </tr>`                   
            }
            html+=  `</tbody>
            </table>
                    </div>`;
            div.innerHTML=html;

            cards.appendChild(div);
        }) ;  
    })
}

function mostrarProducto(id) {
    fetch('productos.json')
    .then(respuesta=>respuesta.json())
    .then(productos=>{
    productos.forEach(producto=>
        {
            if(producto.id==id){
                divImagen=document.createElement('div');
                divImagen.classList.add('imagen-producto')
                
                text=producto.nombre;
                img=producto.imagen;
                html='';
                html+= `<div class="imagen-zoom animated fadeIn">
                            <h3>${text}</h3>
                            <img src="${img}" alt="" />
                        </div>
                        <div id="wrapper" class="datos-zoom animated fadeIn">
                            
                            <table id="keywords" cellspacing="0" cellpadding="0" border>
                                <thead>    
                                    <tr>
                                        <th><span>Modelo</span></th>

                                    </tr>
                                </thead>
                            <tbody>`;
            for(let i=0;i<producto.modelos.length;i++){
                modelo=producto.modelos[i];

                html+= `<tr>
                            <td class="lalign">${modelo}</td>
                     
                        </tr>`                   
            }
            html+=  `</tbody>
                </table>
            <a class="boton-cerrar" onclick="cerrar()">Atras</a>
                    </div>`;
            divImagen.innerHTML=html;

            cards.appendChild(divImagen);
            }
        })
    })

}
function cerrar(){
    document.getElementById("resultado").removeChild(divImagen);
}

cargarProductos();


