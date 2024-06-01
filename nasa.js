const url="https://api.nasa.gov/planetary/apod?api_key=asp4LsIT26jeNYdSxjhFYzgghaqIIkgjbLlvH4sS";
let p=document.querySelector("#Dspt");
let h=document.querySelector("#title");
let img=document.querySelector("#img");
let date=document.querySelector("#date");


const nasaPotd=async ()=>{
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    h.innerHTML=data.title+ h.innerHTML;
    p.innerHTML=data.explanation;
    img.src=data.url;
    date.innerHTML= date.innerHTML+ data.date;
}

nasaPotd();