import React, { useState } from 'react'

const tododata = [
  { id: 1, description: "Buy milk", quantity: 2, Done: false },
  { id: 2, description: "Buy Socks", quantity: 12,Done: false },
  { id: 3, description: "Buy Charger", quantity: 1, Done: true },
  { id: 4, description: "Buy Pants", quantity: 2, Done: false },
];

function App() {
  const [addItems,setAddItems]=useState(tododata)
  
  function handleAdditems(newTodo){
    setAddItems(addItems=>[...addItems,newTodo])
    console.log(addItems)
  }
  function handleDeleteItems(id){
     setAddItems(addItems=>addItems.filter(item=>item.id!==id))
  }
  return (
    <div>
      <Data addItems={addItems} handleDeleteItems={handleDeleteItems}/>
      <Input onAddItems={handleAdditems} />
    </div>
  )
}

function Input({onAddItems,handleDeleteItems}){

  const [description,setDescription]=useState('')
  // const [addItems,setAddItems]=useState(tododata)
  
  // function handleAdditems(newTodo){
  //   setAddItems(addItems=>[...addItems,newTodo])
  //   console.log(addItems)
  // }


  function handleSubmit(e){
    // console.log(e)
    if(!description) return;
    const newTodo={description,bought:false,id:Date.now()}
    console.log(newTodo);
    onAddItems(newTodo)
    setDescription('')
  }

  return(<>
  <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
  <button onClick={handleSubmit}>Add</button>
  </>)
}

function Data({addItems,handleDeleteItems}){
  return(<>
   {addItems.map(data=><List handleDeleteItems={handleDeleteItems} data={data} key={data.id}/>)}
  </>)
}
function List({data,handleDeleteItems}){
  return(<>
  <div><h1 style={data.Done?{textDecoration: "line-through"}:{}}>{data.description}   {data.quantity}</h1></div>
  <button onClick={()=>handleDeleteItems(data.id)}>Delete</button>
  </>)
}
export default App