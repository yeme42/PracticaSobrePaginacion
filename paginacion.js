// const datosTabla = [
//     {
//         "Nombre": "Yerinson",
//         "apellido": "Muentes",
//         "correo": "correo@correo.com",
//         "telefono": "04141152368"
//     },
//     {
//         "Nombre": "yeri",
//         "apellido": "yeri",
//         "correo": "correo@correo.com",
//         "telefono": "22398"
//     },
//     {
//         "Nombre": "jose",
//         "apellido": "jose",
//         "correo": "correo@correo.com",
//         "telefono": "2563"
//     },
//     {
//         "Nombre": "javier",
//         "apellido": "javier",
//         "correo": "correo@correo.com",
//         "telefono": "985623"
//     },
//     {
//         "Nombre": "pedro",
//         "apellido": "pedro",
//         "correo": "correo@correo.com",
//         "telefono": "2525014"
//     },
//     {
//         "Nombre": " Paulo",
//         "apellido": "Petry",
//         "correo": "paulo.petry@relal.org.co",
//         "telefono": "26558"
//     },
//     {
//         "Nombre": "Rafa",
//         "apellido": "Matas",
//         "correo": "rmatas@lasalle.org",
//         "telefono": "25451"
//     },
//     {
//         "Nombre": "Carlos",
//         "apellido": "Castañeda",
//         "correo": "abeland@lasalle.org",
//         "telefono": "24324124"
//     },
//     {
//         "Nombre": "Manuel",
//         "apellido": "Casas",
//         "correo": "vimanur@hotmail.com",
//         "telefono": "43256"
//     },
//     {
//         "Nombre": "Víctor",
//         "apellido": "Marín",
//         "correo": "scornejot@hotmail.com",
//         "telefono": "4656758"
//     },
//     {
//         "Nombre": "Eder",
//         "apellido": "Valadez",
//         "correo": "scornejot@hotmail.com",
//         "telefono": "84345"
//     },
//     {
//         "Nombre": "Valentina",
//         "apellido": "Martínez",
//         "correo": "jcarlosvaladez@hotmail.com",
//         "telefono": "678904"
//     },
//     {
//         "Nombre": "Rodrigo",
//         "apellido": "Carrión",
//         "correo": "comisiondevocaciones@lasalle.org.ar",
//         "telefono": "7547457"
//     },
//     {
//         "Nombre": "Gerardo",
//         "apellido": "Franco",
//         "correo": "junior.schnorrenberger@lasalle.org.br",
//         "telefono": "3432423"
//     },
//     {
//         "Nombre": "Junior",
//         "apellido": "Cornejo",
//         "correo": "junior.schnorrenberger@lasalle.org.br",
//         "telefono": "5357357"
//     },
//     {
//         "Nombre": "Maria",
//         "apellido": "Corder",
//         "correo": "correo@correo.com",
//         "telefono": "556596"
//     },
//     {
//         "Nombre": "Alexander",
//         "apellido": "Franco",
//         "correo": "correo@correo.com",
//         "telefono": "453654343"
//     },
//     {
//         "Nombre": "Luis",
//         "apellido": "Ramos",
//         "correo": "correo@correo.com",
//         "telefono": "6876796"
//     },
//     {
//         "Nombre": "José",
//         "apellido": "Falcone",
//         "correo": "correo@correo.com",
//         "telefono": "796796"
//     },
//     {
//         "Nombre": "Felix",
//         "apellido": "Pivaral",
//         "correo": "correo@correo.com",
//         "telefono": "7676765"
//     },
//     {
//         "Nombre": "Rodrigo",
//         "apellido": "Peña",
//         "correo": "correo@correo.com",
//         "telefono": "38634563453"
//     },
//     {
//         "Nombre": "David",
//         "apellido": "Muñoz",
//         "correo": "correo@correo.com",
//         "telefono": "6436434"
//     },
//     {
//         "Nombre": "Eliecer",
//         "apellido": "Romero",
//         "correo": "correo@correo.com",
//         "telefono": "6434634"
//     },
// ]
crearTabla();





async function crearTabla() {

    const cuerpo = await fetch('data.json');
    var resp = await cuerpo.json();

    console.log(resp)

    let limite = 5;
    let desde = 0;
    // let paginaActual = resp.length / ;
    let paginas = resp.length / limite;
    let paginaActiva = 1
    let arreglo = resp.slice(desde, limite)
    console.log(arreglo)
    
    let data =document.querySelector('#datos');
    const cargarProductos =  ()=>{
        data.innerHTML=''
        arreglo.map((producto)=>{
            const fila=document.createElement('tr')
            fila.setAttribute('key', producto.id)
            const contenido = 
            `<tr>
                <td>${producto.Nombre}</td>
                <td>${producto.apellido}</td>
                <td>${producto.correo}</td>
                <td>${producto.telefono}</td>
            </tr>`;
            fila.innerHTML= contenido;
            data.append(fila);
            cargarItemPaginacion()

        })
    }

    // let data =document.querySelector('#datos');
    //     data.innerHTML ='';

    // for( let item of resp){

    //     // console.log(item)
    //     data.innerHTML += `
    //     <tr>
    //         <td>${item.Nombre}</td>
    //         <td>${item.apellido}</td>
    //         <td>${item.correo}</td>
    //         <td>${item.telefono}</td>
    //     </tr> `
    
    // }
    
    const cargarItemPaginacion = () =>{
        document.querySelector('#items').innerHTML=''

        for (let index = 0; index <paginas; index++){
            const item =document.createElement('li')
            item.classList=`page-items`
            const enlace = `<button class="page-link" onclick="pasarPagina(${index})">${index+1}</button>`
        item.innerHTML=enlace
        document.querySelector('#items').append(item);
        
        }

    }

    window.pasarPagina = (paginas)=>{
        paginaActiva = paginas + 1
        desde = limite * paginas

    if(desde <= resp.length){
        arreglo = resp.slice(desde, limite * paginaActiva)
        console.log("aqui se esta imprimiendo", arreglo)
        cargarProductos()
    }
    }
    cargarProductos()

   
    
    function avanzarPagina(){
        desde = limite * paginaActiva;
        paginaActiva = paginaActiva + 1;

        console.log("arreglo va desde" + desde, " hasta ", limite * paginaActiva )
        
        if(desde < resp.length){
            arreglo = resp.slice(desde, limite * paginaActiva)
            console.log("aqui se esta imprimiendo", arreglo, "limite ", limite)
            cargarProductos()
        }
        
    }

    let botonActivo = document.querySelector("#atras");
    botonActivo.disabled = false;

    function retrocederPagina(){
        desde = limite * paginaActiva;
        paginaActiva = paginaActiva - 1;
       

        console.log("arreglo va desde" + desde, " hasta ", limite * paginaActiva )
        
        if(desde < resp.length){
            arreglo = resp.slice(limite * paginaActiva, desde )
            console.log("aqui se esta imprimiendo", arreglo, "limite ", limite)
            cargarProductos()
        }
        if(paginaActiva === 0 ){
            botonActivo = true;
            console.log("ya llego al final")
        }
        cargarProductos()
        
    }
    
    

    document.querySelector('#atras').addEventListener("click", retrocederPagina);
    
    document.querySelector('#siguiente').addEventListener("click", avanzarPagina);

    // botonAtrasDOM.addEventListener("click", retrocederPagina);
    // botonSiguienteDOM.addEventListener("click", avanzarPagina);
    
}




// Variables para la paginacion
    