let user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];

dataAbove(user);
function dataAbove(arr) {
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
        btn.textContent='ADD TO CART';
        btn.addEventListener('click',function(){
            // console.log(el)
         cartfn(el);
        });
        card.append(p,username,email,btn);
        // console.log(el.name);
        document.querySelector('#cont').append(card);
    })
    
}

function cartfn(el){
   
    let cart =  JSON.parse(localStorage.getItem('carts')) || [] // undefined || []
    cart.push(el);
    localStorage.setItem('carts',JSON.stringify(cart))   
}