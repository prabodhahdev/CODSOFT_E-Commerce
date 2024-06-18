import React from 'react'
import './Admin.css'
import SideBar from '../../Components/SideBar/SideBar'
import{Routes,Route} from 'react-router-dom'
import Addproduct from '../../Components/AddProduct/Addproduct'
import Listproduct from '../../Components/ListProduct/Listproduct'

const Admin = () => {
  return (
    <div className='admin'>
      <SideBar/>

      <Routes>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<Listproduct/>}/>

      </Routes>
    </div>
  )
}

export default Admin
