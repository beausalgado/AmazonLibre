const APIData = process.env.SELECTOR_API
//console.log(APIData)

// async function getSelectorData() {
//   console.log("selector data")
//   const res = await fetch();
//   console.log("fetching selector data")
//   const categories = await res.json();
//   console.log("fetching selector data json")
//   console.log(categories)
//   return categories;
// }

// export default function Selector() {
//   const [selectorData, setSelectorData] = useState([]);

//   useEffect(() => {
//     console.log("fetch")
//     //console.log(APIData)
//     fetch("https://api.mercadolibre.com/sites/MLA/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         setSelectorData(data)
//       })
//     console.log("fetch1")
//   }, []);


export default async function Selector() {
  console.log(APIData)
const res = await fetch(APIData);
const selectorData = await res.json()




  return (
    <>
      <select className='select-left'>
        <option>Todo</option>
        {selectorData.map(selectorItem => <option key={selectorItem.id}> {selectorItem.name} </option>)}
      </select>

    </>

  );
}
