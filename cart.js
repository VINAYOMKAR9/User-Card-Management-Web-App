let cart =  JSON.parse(localStorage.getItem('carts')) || [] // undefined || []
console.log(cart)
// window.onload = function(){
//     alert("welocme to cart page")
// }

    dataAbove(cart)
function dataAbove(arr) {
    document.querySelector('#cont').innerHTML = "";
    arr.map((el, i) =>{
        // console.log(el);
        let card = document.createElement('div');
        let p = document.createElement('p');
        let username = document.createElement('p');
        let email = document.createElement('p');
        let btn = document.createElement('button');
        card.setAttribute('id','card')
        p.setAttribute('id','nname');
        username.setAttribute('id','username');
        email.setAttribute('id','mail');
        btn.setAttribute('id','btn');
        p.textContent=`Name : ${el.name}`;
        username.textContent=`username : ${el.username}`;
        email.textContent=`E-mail : ${el.email}`;
        btn.textContent='Delete from cart';
        btn.addEventListener('click',function(){
         cartfn(el,i);
        });
        card.append(p,username,email,btn);
        // console.log(el.name);
        document.querySelector('#cont').append(card);
    })
    
}

function  cartfn(el,i){
    let cart =  JSON.parse(localStorage.getItem('carts')) || [] // undefined || []
    let filtereData = cart.filter((ele,index)=>{
        // index 0,1,2
        // i am returning an index who is not equal to i, i?? the Del button clicked index (i)
        return i!=index
    })
    localStorage.setItem('carts',JSON.stringify(filtereData))   
    // window.location.reload()
    dataAbove(filtereData)
}

let cont=document.querySelector('#cont').innerHTML
if (cont == ''){
    alert('Nothing in Cart')
}