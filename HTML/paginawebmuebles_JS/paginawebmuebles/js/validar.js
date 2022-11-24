
//form.addEventListener('submit', e =>{
//e.preventDefault();
//validainputs();
//});
function validainputs() {
    const nombre= document.getElementById("nombre");
    //const email= document.getElementById("email");
    const telefono= document.getElementById("telefono");
    const celular= document.getElementById("celular");
    const comentarios= document.getElementById("comentarios");
    
    

    //asignación boton enviar
const enviar=document.getElementById("enviar");



const nom= nombre.value.trim();
const emailval= email.value.trim();
const tel= telefono.value.trim();
const cel= celular.value.trim();
const coment= comentarios.value.trim();


//cambio **
var errorf= 0;

if (nom ==="") {
    ocErrorform(nombre, "no puede estar vacío");
    errorf=1;

}else{
    exitosform(nombre);
}



if (emailval ===""){
    ocErrorform(email,"no se puede dejar email en blanco");
    errorf=1;

}else if (!valEmail(emailval)){
    ocErrorform(email,"no ingreso, email no valido");
    errorf=1;

}else{
    exitosform(email);
}



if (tel ==="") {
    ocErrorform(telefono, "no puede estar vacío");
    errorf=1;

}
else if (isNaN(tel) ==true){
    ocErrorform(telefono,"no ingreso, numero no valido");
    errorf=1;

}else{
    exitosform(telefono);
}



if (cel ==="") {
    ocErrorform(celular, "no puede estar vacío");
    errorf=1;

}
else if (isNaN(cel) ==true){
    ocErrorform(celular,"no ingreso, numero no valido");
    errorf=1;

}else{
    exitosform(celular);
}



if (coment ==="") {
    ocErrorform2(comentarios, "no puede estar vacío");
    errorf=1;

}else{
    exitosform2(comentarios);
}



if (errorf==0){
    enviar.addEventListener('click', function(){
    alert('enviando datos de formulario...');
    window.location.reload()})
}  



return false;
}
function ocErrorform (input, message){
   const formControl=input.parentElement;
   const small=formControl.querySelector("small");
   formControl.className="form-control error";
   small.innerText =message; 
}

function ocErrorform2 (textarea, message){
    const formControl=textarea.parentElement;
    const small=formControl.querySelector("small");
    formControl.className="form-control error";
    small.innerText =message; 
 }

function exitosform (input){
    const formControl=input.parentElement;
        formControl.className="form-control success";
    }

function exitosform2 (textarea){
    const formControl=textarea.parentElement;
        formControl.className="form-control success";
    }
function valEmail(email){
return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
}



