import Selector from './searchbarselector';

export default function Header() {

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
       <Selector/>

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

  </>

  );
}


 
 
