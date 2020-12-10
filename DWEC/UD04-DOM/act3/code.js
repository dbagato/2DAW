

function crearCheckbox() {

    for(i = 0;i<100;i++){
    var checkBox = document.createElement("input");
    var salto = document.createElement("br");
    checkBox.type="checkbox";
    checkBox.name="miCheckBox";
    checkBox.value=10;
    var etiqueta = document.createElement("label");
    var texto = document.createTextNode(Math.random());
    etiqueta.appendChild(texto);
    checkBox.appendChild(etiqueta);
    document.body.appendChild(salto);
    document.body.appendChild(checkBox);
    document.body.appendChild(etiqueta);
    }
   
}

function marcarTodos() {
    var ckbox=document.getElementsByTagName("input");
    for (let j = 0; j < ckbox.length; j++) {
        ckbox[j].checked=true;
        
    }
}

function desmarcarTodos() {
    var ckbox=document.getElementsByTagName("input");
    for (let j = 0; j < ckbox.length; j++) {
        ckbox[j].checked=false;
        
    }
}
