"use client"
import { useState } from 'react';

const isLoggedIn = false

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  
const selectorData = async function getSelectorData() {
   const res = await fetch('https://api.mercadolibre.com/sites/MLA/categories');
   const categories = await res.json()
   console.log(categories)
   return categories 
 }


export default function Home() {
    const [numberofclicks, setNumberofClicks] = useState(0);
    function handleClick() {
      setNumberofClicks(numberofclicks + 1);
    }
    

  return (
  <>
  <header>

    <div className='navbar'>
    <a href="/"><img src="/amazonlogo.png" className='nav-logo'></img></a>
    <div className='nav-text-container'>
    <img src="/pin.png" className='pin'></img>
    <div className='nav-innertext-container'>
      <span className='line-1 delivery'>Enviar a Beau</span>
      <span className='line-2'>CABA CP1641</span>
    </div>
    </div>
    <div className='nav-search'>
      <select className='select-left'>
        <option>Todo</option>
        <option>Zapatillas</option>
        <option>Plantas</option>
      </select>
    <form method="GET" name="global-search">
      <input type="text" placeholder="Buscar productos, marcas y más..." className='search-box'></input>
  </form>
     <div className='search-right'>
     <img src="/magnifier.png" className='magnifying-glass'></img>
     </div>
      </div>
      <div className='flags-container'>
      <img src="/americanflag.png" className='flag'></img>
      <select className='language-select'>
      <option>EN</option>
      <option>ES</option>
      </select>
     
    </div>
    <div className='nav-text-container accounts'>
    <div className='nav-innertext-container'>
      <span className='line-1'>Hello, Beau</span>
      <span className='line-2'>Accounts & Lists</span>
    </div>
    </div>
    <div className='nav-text-container'>
    <div className='nav-innertext-container'>
      <span className='line-1'>Returns</span>
      <span className='line-2'>& Orders</span>
    </div>
    </div>
      <div className='cart-container'>
        <div className='align-number-cart'>
        <span className='cart-number'>0
      </span>
    <img src="/cart.svg" className='cart'></img>
        </div>
    <div className='cart-text-container'>
      <span className='cartline-1'>.
      </span>
      <span className='line-2'> Carrito
      </span>
    </div>
    </div>
  </div>
  </header>
  <h1 className="title">To Do List</h1>
  <h1 className="title"> {isLoggedIn && user.name}</h1>
  <ul>{listItems}</ul>
  <pre>
    {selectorData[0]}
  </pre>

  </>

  );
}


 
 
