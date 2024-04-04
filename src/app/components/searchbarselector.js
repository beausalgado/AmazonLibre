'use client';
import { useEffect, useState } from 'react';

async function getSelectorData() {
  const res = await fetch(process.env.SELECTOR_API);
  const categories = await res.json();
  return categories;
}

export default function Selector() {
  const [selectorData, setSelectorData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSelectorData();
        setSelectorData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <select className='select-left'>
        <option>Todo</option>
        {selectorData.map(selectorItem => <option key={selectorItem.id}> {selectorItem.name} </option>)}
      </select>

    </>

  );
}
