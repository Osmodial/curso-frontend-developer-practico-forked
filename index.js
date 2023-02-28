console.log('hasdoasl');

const menu_bar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mainicon = document.querySelector('.menu');
const HamMenu = document.querySelector('.mobile-menu');
const icono_carrito = document.querySelector('.navbar-shopping-cart');
const carrito = document.querySelector('.product-detail');
const cards_container = document.querySelector('.cards-container');

menu_bar.addEventListener('click', toggleDesktopMenu);
mainicon.addEventListener('click', toggleHamMenu)
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!carrito.classList.contains('inactive')) {
        carrito.classList.toggle('inactive');
    }       
}
function toggleHamMenu() {
    HamMenu.classList.toggle('inactive');
    if (!carrito.classList.contains('inactive')) {
        carrito.classList.toggle('inactive');
    }
}

icono_carrito.addEventListener('click', togglecarritoMenu);
function togglecarritoMenu() {
    carrito.classList.toggle('inactive');
    if (!HamMenu.classList.contains('inactive')) {
        HamMenu.classList.toggle('inactive');
    }
}

const productsDashboard = [];
productsDashboard.push({
    name: 'Bicicleta',
    price: 270000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productsDashboard.push({
    name: 'Lectura Astral',
    price: 1000,
    image: 'https://i.pinimg.com/564x/96/8d/cd/968dcdc776dafdf9ecd5d1e912fd44bc.jpg',

})
productsDashboard.push({
    name: 'Tour en Yate',
    price: 100000000,
    image: 'https://i.pinimg.com/564x/58/35/44/5835440893500f64d1e6e461ee716478.jpg',

})
productsDashboard.push({
    name: 'Bugatti',
    price: 100000000,
    image: 'https://i.pinimg.com/564x/d8/61/5f/d8615f716f4d6b2f0ec518544d70ac02.jpg',

})
productsDashboard.push({
    name: 'Joselyn',
    price: 100000000,
    image: 'https://scontent.fpmc4-1.fna.fbcdn.net/v/t39.30808-6/311647102_10228504018686234_1359140348634176699_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3Yj1026I_4QAX9dYMsh&_nc_ht=scontent.fpmc4-1.fna&oh=00_AfBoqDM4O_3VcGZzQfTRQ1T6a9l5rXseYT22F0-MKuUx6Q&oe=6402E13B',

})





{/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */}

console.log(productsDashboard);

function cast_dashboard(arr) {
    for (i of productsDashboard) {
        // declaraciones 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', i.image);

        const productInfoCard = document.createElement('div');
        productInfoCard.classList.add('product-info');

        const divpic = document.createElement('div');
        const productName = document.createElement('div');
        productName.innerText = i.name;
        const productPrice = document.createElement('div');
        productPrice.innerText = '$' + i.price;
        
        const figuradelProducto = document.createElement('figure');
        const imagenfdp = document.createElement('img');
        imagenfdp.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        // inserciones
        figuradelProducto.appendChild(imagenfdp);
        divpic.appendChild(productName);
        divpic.appendChild(productPrice);
        productInfoCard.appendChild(divpic);
        productInfoCard.appendChild(figuradelProducto);
        productCard.appendChild(img);
        productCard.appendChild(productInfoCard);
        //insercion final
        cards_container.appendChild(productCard);
    }

}

cast_dashboard(productsDashboard);