import { apicall } from ".";
console.log("hey there");
const input = document.querySelector(".cityname");
const form = document.querySelector("form");
const tempSpan = document.querySelector('h2.Temp span.otemp');
const feelsLikeSpan = document.querySelector('h3.Feelslike span.ofeel');
const humiditySpan = document.querySelector('h3.Humidity span.ohumi');
const windSpan = document.querySelector('h3.wind span.owind');
export default function citycall(){

    form.addEventListener("submit",function(e){
        e.preventDefault();
        console.log(input.value);
        const getcityname = input.value;
        apicall(getcityname);
        })
        
        
}