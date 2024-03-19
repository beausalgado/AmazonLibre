"use client"
import { useState } from 'react';
import Image from 'next/image'

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
    <div className='nav-search'>
    <div className='search-left'>
      <select>
        <option>Test 1</option>
        <option>Test 2</option>
        <option>Test 3</option>
      </select>
    </div>
    <form method="GET" name="global-search">
      <input type="text" placeholder="Buscar prodcuts, marcas y más.." className='search-box'></input>
  </form>
      </div>
  </div>
  </header>
  <h1 className="title">To Do List</h1>
  <h1 className="title"> {isLoggedIn && user.name}</h1>
  <ul>{listItems}</ul>
 <ButtonThingy numberofclicks={numberofclicks} handleClick={handleClick} />
 <ButtonThingy numberofclicks={numberofclicks} handleClick={handleClick} />

  </>

  );
}

function ButtonThingy({numberofclicks, handleClick}) {

  return (<button onClick={handleClick}> Clicked {numberofclicks}</button>) 
  }
 
 
