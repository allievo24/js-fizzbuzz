const containerDom=document.getElementById("container")

for (let  i=0;  i <=1000; i++){
    
    containerDom.innerHTML += `<div class="box">${i}</div>`

    console.log (i)   
}

