'use client';

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

    function handleClick() {
      alert('You clicked me!');
    }



export default function Home() {
  return (
  <>
  <h1 className="title">To Do List</h1>
  <h1 className="title"> {isLoggedIn && user.name}</h1>
  <ul>{listItems}</ul>
  <button onClick={handleClick}> I'm a button</button>
  </>

  );
}

