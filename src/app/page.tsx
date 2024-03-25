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
    <div className='location-container'>
    <img src="/pin.png" className='pin'></img>
    <div className='delivery-text'>
      <span className='deliveryline-1'>Enviar a Beau</span>
      <span className='deliveryline-2'>CABA 1641</span>
    </div>
    </div>
    <div className='nav-search'>
      <select className='search-left'>
        <option>Todo</option>
        <option>Zapatillas</option>
        <option>Plantas</option>
      </select>
    <form method="GET" name="global-search">
      <input type="text" placeholder="Buscar prodcuts, marcas y más.." className='search-box'></input>
  </form>
     <div className='search-right'>
     <img src="/magnifier.png" className='magnifying-glass'></img>
     </div>
      </div>
  </div>
  </header>
  <h1 className="title">To Do List</h1>
  <h1 className="title"> {isLoggedIn && user.name}</h1>
  <ul>{listItems}</ul>

  </>

  );
}


 
 
