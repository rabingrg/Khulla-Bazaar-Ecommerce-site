import React from 'react'
import { useState } from 'react'

const App1 = () => {

  const [allDetails,setAllDetails] = useState({
    fullname:'',
    phone:'',
    address:'',
    email:''
  })
  const [stores,setStores] = useState([])

  const handleChange=(e)=>{
    setAllDetails((prevValues)=>{
      return ({...prevValues,[e.target.name]:e.target.value})
    })
  }

  const storeData = (li)=>{
    setStores([...stores,li])
  }

  console.log(stores)


  return (
    <div>
      <form onSubmit={(e)=>{console.log(e)
      storeData(e)}
      }>
        <input type='text' name='fullname' onChange={handleChange} placeholder='Fullname'/><br/>
        <input type='number' name='phone' onChange={handleChange} placeholder='Phone No.'/><br/>
        <input type='text' name='address' onChange={handleChange} placeholder='Location'/><br/>
        <input type='email' name='email' onChange={handleChange} placeholder='Enter your mail'/><br/>
        <button type='submit'>Enter</button><br/>
      </form>

      
    </div>
  )
}

export default App1 
