
function comenzar(){
  myboton=document.getElementById("dame_ubicacion");
  myboton.addEventListener("click", obtener, false);

}

function obtener(){
    var parametros={enableHighAccuracy:true, timeout:1000, maximumAge:60000};
    navigator.geolocation.watchPosition(mostrar_posicion, gestion_errores, parametros);
    //navigator.geolocation.getCurrentPosition(mostrar_posicion);
}

function mostrar_posicion(posicion){
    var ubicacion=document.getElementById("ubicacion");

    var mapa="http://maps.google.com/maps/api/staticmap?center=" + 
        posicion.coords.latitude + ", " + 
        posicion.coords.longitude + ", " +
        "&zoom=12&size=300x300&sensor=false&markers=" +
        posicion.coords.latitude + ","+ 
        posicion.coords.longitude;

    /*    var miubicacion="";
    miubicacion+="Latitud:  " + posicion.coords.latitude +"<br>";
    miubicacion+="Longitud: " + posicion.coords.longitude +"<br>";
    miubicacion+="Exactitud: " + posicion.coords.accuracy +"<br>";
    miubicacion+="Altitud: " + posicion.coords.altitude +"<br>";
    */

    ubicacion.innerHTML = "<img src'"+ mapa + "'>";
    //var latitud="Latitud:  " + posicion.coords.latitude;    
    //var longitud="Longitud: " + posicion.coords.longitude;
    //ubicacion.innerHTML = latitud  + ",  " +"<br>"  + longitud;
}

function gestion_errores(error){
    //alert ("Ha ocurrido un error " + "con codigo: "+ error.code + ",  " + error.message);

    if(error.code == 1){
        alert("Debes permitir el acceso a la geolocalizacion en tu navegador");
    }
}

window.addEventListener("load", comenzar,  false);