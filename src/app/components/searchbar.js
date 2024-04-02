import Selector from './searchbarselector';
// import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
    // const searchParams = useSearchParams()
    // const search = searchParams.get('search')
    // console.log(search)
    return (
        <>
            <div className='nav-search'>
                <Selector />

                <form method="GET" name="global-search">
                    <input type="text" name="query" placeholder="Buscar productos, marcas y más..." className='search-box'></input>
                <button className='search-right' type="submit">
                    <img src="/magnifier.png" className='magnifying-glass'></img>
                </button>
                </form>
            </div>
        </>

    );
}

