import { useState } from "react";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";
import State from "./State";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chip", quantity: 5, packed: true },
  
  

];



function App() {
  const[items,setItem]=useState(initialItems)
  
  function handleAdd(item){
    setItem(items=>[...items,item])
  }

  function handleDelet(id){
      setItem(items=>items.filter(item=>item.id!=id))
  }

  function handelToggle(id){
    setItem((items)=>
      items.map(item=>
        item.id===id?{...item, packed:!item.packed}
        :item
        )
    )
  }
  function onClear(){
    let confirme=window.confirm("Are you sure you want to clear all items?")
    if(confirme)
    setItem([])
  }

  return(
    <div className="app">
    <Logo />
    <Form onAddItem={handleAdd} />
    <PackingList items={items} 
    onDeletItem={handleDelet}
    onTogggleItem={handelToggle}
    onClear={onClear}
    />
    <State count={items.length} pacCount={items.filter(item=>item.packed).length} />
    </div>
    
    

  )
}







export default App;
