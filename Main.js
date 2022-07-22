/* 
 Author: Danette Coetzee
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */




const title = document.getElementById('title');
const img = document.getElementById('content');
const exp = document.getElementById('exp');

getResponse();

async function getResponse() {
    var APIKEY = "DEMO_KEY";
    var res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    var data = await res.json();
    useApiData(data);
}

function useApiData(data){
    title.innerHTML += data.title;
    img.src = data.url;
    exp.innerHTML += data.explanation;
}