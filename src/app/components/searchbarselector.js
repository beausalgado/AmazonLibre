async function getSelectorData() {
    const res = await fetch(process.env.SELECTOR_API);
    const categories = await res.json()
    return categories 
  }
 

export default async function Selector() {

    const selectorData = await getSelectorData()

  return (
  <>
      <select className='select-left'>
        <option>Todo</option>
        {selectorData.map(selectorItem => <option key={selectorItem.id}> {selectorItem.name} </option> )}
      </select>

  </>

  );
}
