//doy el foco al input par el igreso de palabra a encriptar
let inputPalabra=document.getElementById('ingreso-palabra');
inputPalabra.focus();
//defino variables a utilizar
let salidaTexto=document.getElementById('salida-texto');
let btnEncriptar=document.getElementById('btn-encriptar');
let btnDesencriptar=document.getElementById('btn-desencriptar');
let btnBorrar=document.getElementById('btn-limpiar');
let btnCopiar=document.getElementById('btn-copiar'); 
 
 //Defino una funcion para convertir un string a un array
 let convertirArray=function(str){
    str=str.toLowerCase();
    return [...str];
};
//Defino una funcion para convertir un array a un string
let convertirString=function(arr){
    return arr.join('');
};
//Detectar mayusculas y caracteres especiales
function caracterNoAceptado(str){
    let letras=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z","á","é","í","ó","ú","Á",
    "É","Í","Ó","Ú","/","+","-","*","=","?","¿","{","}",".","_","[","]",
    "^","¨","<",">","<=",">=",";",",",":","$","%","&","@","|"];
    let cadena=str;
    let flag=false;
    let indice=0;   
        while (indice<cadena.length) {
            if(flag===false){
                for (let index = 0; index < letras.length; index++) {
                    if(cadena[indice]===letras[index]){
                        flag=true;
                        alert(`Caracter no aceptado ${cadena[indice]}`);
                    }    
                }
            }   
            indice++;
        }
        return flag;
}

//funcion para encriptar
let encriptar=function(array){
    const nuevoArray=[];
    array.filter((element)=>{
        if(element==="a"){
            nuevoArray.push("ai")
        }
        else if(element==="e"){
            nuevoArray.push("enter");
        }
        else if(element==="i"){
            nuevoArray.push("imes");
        }
        else if(element==="o"){
            nuevoArray.push("ober");
        }
        else if(element==="u"){
            nuevoArray.push("ufat");
        }
        else{
            nuevoArray.push(element);
        }
        
    });
    return nuevoArray;
}
//Funcion para copiado del contenido del input
function copiarTexto(){
    salidaTexto.select();
    document.execCommand('copy');
}

//Funcion para desencriptar
function desencriptar(str){
    let cadena=str;
    let vocales=["ai","enter","imes","ober","ufat"];
    vocales.forEach(element => {
        if(cadena.includes(element)){
            if(element=="ai"){
                cadena=cadena.replace(/ai/g,"a");
            }
            if(element=="enter"){
                cadena=cadena.replace(/enter/g,"e");
            }
            if(element=="imes"){
                cadena=cadena.replace(/imes/g,"i");
            }
            if(element=="ober"){
                cadena=cadena.replace(/ober/g,"o");
            }
            if(element=="ufat"){
                cadena=cadena.replace(/ufat/g,"u");
            }
        }
    });
 return cadena;
}

//funcion proceso encriptado
function procesoEncriptado() {
    const valores=inputPalabra.value;
    const salida=caracterNoAceptado(valores);
    if (!salida) {
        const arrayTrabajo=convertirArray(valores);
        const encriptado=encriptar(arrayTrabajo);
        const cadena=convertirString(encriptado);
        salidaTexto.value=cadena;
        inputPalabra.value="";
        inputPalabra.focus();  
    }
        inputPalabra.value="";
        inputPalabra.focus(); 
}
//funcion proceso desencriptado
function procesoDesencriptado(){
    const valores=inputPalabra.value;
    const salida=desencriptar(valores);
    salidaTexto.value=salida;
    inputPalabra.value="";
    inputPalabra.focus();
}
//funcion proceso borrado input de salida de encriptado
function procesoBorrar(){
    salidaTexto.value="";
    inputPalabra.value="";
    inputPalabra.focus();
}
function procesoCopiado() {
    copiarTexto();
    salidaTexto.value="";
    inputPalabra.value="";
    inputPalabra.focus();
}

btnEncriptar.addEventListener("click",procesoEncriptado);
btnDesencriptar.addEventListener("click",procesoDesencriptado);
btnBorrar.addEventListener("click",procesoBorrar);
btnCopiar.addEventListener("click",procesoCopiado);

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/