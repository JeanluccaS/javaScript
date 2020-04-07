/****************************************************************
 
comentar o descomentar la constante dependiendo de lo que se quiera probar

*****************************************************************/


const Mensaje= "Pipo es un buen perro"; //mensaje de base
//const Mensaje= "Pipo"//si es una sola palabra, tiene menos de 10.
//const Mensaje= "PIPO VIVE"//todo mayuscula.
//const Mensaje= "¿por que?"//es una pregunta,esta todo en minuscula.
//const Mensaje= "aeiou"//vocal
//const Mensaje= "la felicidad"//dad

console.log(Mensaje.indexOf(" ")); //el indice donde se encuentra el espacio

console.log(Mensaje.length); //el largo del mensaje

if(Mensaje.length>10)
{
    console.log("tiene mas de 10 caracteres");
}else
{
    console.log("no tiene mas de 10 caracteres");
}

if(Mensaje.length%2==0) //si el mensaje es par
{
    console.log("es par");
}else
{
    console.log("es impar");
}

console.log(Mensaje.slice(0,4)); //las primeras 4 letras

console.log(Mensaje.toUpperCase()); //todo en mayuscula

if(Mensaje == Mensaje.toLowerCase())  //comprueba si es mayuscula, minuscula o una mezcla de ambos
{
    console.log("Minuscula");
}else if(Mensaje == Mensaje.toUpperCase())
{
    console.log("Mayuscula");
}else
{
    console.log("Es una mezcla de ambos");
}

console.log(Mensaje.slice(Mensaje.lastIndexOf(" ")+1,Mensaje.length)); //la ultima palabra.

console.log(Mensaje.lastIndexOf(" "));//el indice en donde se encuentra la ultima palabra (o el espacio de la misma)

if(Mensaje.charAt(Mensaje.length/2)==" ") //muestra la letra del medio o que este mas cerca del medio del mensaje.
{
    console.log(Mensaje.charAt((Mensaje.length/2)+1));
}else
{
    console.log(Mensaje.charAt(Mensaje.length/2));
}

/* se fija si la letra del medio es o no una vocal*/
if(Mensaje.charAt(Mensaje.length/2)=="a"||Mensaje.charAt(Mensaje.length/2)=="e"||Mensaje.charAt(Mensaje.length/2)=="i"||Mensaje.charAt(Mensaje.length/2)=="o"||Mensaje.charAt(Mensaje.length/2)=="u")
{
    console.log("La letra es una vocal");
}else
{
    console.log("La letra no es una vocal");
} 

if(Mensaje.indexOf("¿")>=0) //verifica si en el mensaje hay alguna pregunta
{
    console.log("Hay una pregunta");
}else
{
    console.log("No hay preguntas su señoria");
}
console.log(Mensaje.replace("dad","tud")); //remplaza "dad" en el mensaje por "tud"

if(Mensaje.indexOf(" ")<0) //si hay una sola palabra, la muestra en mayus. si hay 2 palabras. las muestra en formato "camelCase" y si hay mas de 2, solo muestra la ultima palabra en minuscula
{
    console.log(Mensaje.toUpperCase());
}else if(Mensaje.indexOf(" ") == Mensaje.lastIndexOf(" "))
{
    console.log(Mensaje.slice(0,Mensaje.indexOf(" ")).toLowerCase() + Mensaje.slice(Mensaje.lastIndexOf(" ")+1,Mensaje.lastIndexOf(" ")+2).toUpperCase()+Mensaje.slice(Mensaje.lastIndexOf(" ")+2,Mensaje.length).toLowerCase());
}else
{
    console.log(Mensaje.slice(Mensaje.lastIndexOf(" ")+1,Mensaje.length).toLowerCase());
}

