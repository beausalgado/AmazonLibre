import LanguageSelector from "./languageselector";
import SearchBar from "./searchbar";



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


          <SearchBar/>

      <LanguageSelector/>
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


 
 
