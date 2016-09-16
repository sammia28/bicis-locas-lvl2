function validateForm(){
    var nom = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var cor = document.getElementById("input-email").value;
    var contr = document.getElementById("input-password").value;
    var opcion = document.querySelector("select").value;

    if (nom.length == 0 && apellido == 0 && cor == 0 && contr == 0) {
        var nuevoNombre = document.createTextNode("Complete todos los cuadros");  
        var crearSpan = document.createElement("span");
        crearSpan.appendChild(nuevoNombre);
        var nuevoSpan = document.getElementById("form-signup-heading");
        var padre = nuevoSpan.parentNode;
        var hijo = padre.insertBefore(crearSpan, nuevoSpan);
    } else {
    
        if( nom == null || nom.length == 0 || nom == ""){
            var nuevoNombre = document.createTextNode("Ingrese nombre.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("name");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);        
        }else if ( /[0-9]/.test(nom)){
            var nuevoNombre = document.createTextNode("No ingrese números.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("name");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);   
        }else if ( /^[a-z]/.test(nom.charAt(0))){
            var nuevoNombre = document.createTextNode("Escriba el primer caracter de su nombre en mayúscula.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("name");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        }

        if( apellido == null || apellido.length == 0 || apellido == ""){
            var nuevoNombre = document.createTextNode("Escribe tu apellido.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("lastname");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        }else if ( /[0-9]/.test(apellido)){
            var nuevoNombre = document.createTextNode("No ingrese números.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("lastname");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        }else if ( /^[a-z]/.test(apellido.charAt(0)) ){
            var nuevoNombre = document.createTextNode("Escriba el primer caracter de su apellido en mayúscula.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("lastname");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        }

        var correos=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!correos.test(cor)) {
            var nuevoNombre = document.createTextNode("Ingrese un correo válido.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("input-email");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        };
        if (contr == null || contr.length == 0){
            var nuevoNombre = document.createTextNode("Ingresa una contraseña.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("input-password");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        }else if (contr.length < 6){
            var nuevoNombre = document.createTextNode("contraseña no valida (debe contener más de 6 caracteres).");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("input-password");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        }
        if (contr == "123456" || contr == "098754" || contr == "password"){
            var nuevoNombre = document.createTextNode("123456, 0987654, password; no son contraseñas válidas.");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.getElementById("input-password");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        } 
        if(opcion == 0){
            var nuevoNombre = document.createTextNode("Elige una opción");  
            var crearSpan = document.createElement("span");
            crearSpan.appendChild(nuevoNombre);
            var nuevoSpan = document.querySelector("select");
            var padre = nuevoSpan.parentNode;
            var hijo = padre.insertBefore(crearSpan, nuevoSpan);
        }        
    };
}