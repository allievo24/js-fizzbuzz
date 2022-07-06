const containerDom=document.getElementById("container")

for (let  i=0;  i <=1000; i++){
    
    containerDom.innerHTML += `<div class="box">${i}</div>`;

    let box =document.querySelector('.box:last-child');

    if ( i % 3 == 0){
        
        box.classList.add('red');
        box.innerHTML = 'buzz';

    }
    else if( i % 5 == 0){

        box.classList.add('yellow');
        box.innerHTML = 'fuzz';

        

    }
    /*else if( i % 5 == 0 )+( i % 3 == 0 ){ */
           /*( i % 5 == 0  i % 3 == 0 )*/
           /*( i % 5 == 0 + i % 3 == 0 )*/
           /*(i % 5 == 0  && i % 3 == 0 )*/
           /*(i % 5 == 0) && ( i % 3 == 0 )*/
           /*((i % 5 == 0 ) &&  ( i % 3 == 0))*/

        
    else if( i % 5 == 0   &&  i % 3 == 0 ){
        box.classList.add('green');
        box.innerHTML = 'fuzzbuzz';

        console.log(i);   
    }
    

}

