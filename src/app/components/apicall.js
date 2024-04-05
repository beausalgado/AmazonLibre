import { useEffect, useState } from 'react';
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

//  export const [selectorData, setSelectorData] = useState([]);

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
