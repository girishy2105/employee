import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create'
import DeleteOutLineIcon from '@mui/icons-material/DeleteOutline'
import logo1 from './images/logo1.png'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Pages/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/signup'
import Home from './Pages/Home'
import About from './Pages/About'
import Employee from './Pages/Employee'
import Newuser from './Pages/Newuser'
import Edit from './Pages/Edit'
import Editdept from './Pages/Editdept'
import Details from './Pages/Details'
import Register from './Pages/Register'
import Deptregister from './Pages/Deptregister'
import Department from './Pages/Department'

function App() {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/signup' element={<Signup></Signup>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/employee' element={<Employee></Employee>} />
          <Route path='/department' element={<Department></Department>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/newuser' element={<Newuser></Newuser>} />
          <Route path='/edit/:id' element={<Edit></Edit>} />
          <Route path='/editdept/:id' element={<Editdept></Editdept>} />
          <Route path='/details/:id' element={<Details></Details>} />
          <Route path='/register' element={<Register></Register>} />
          <Route path='/deptregister' element={<Deptregister></Deptregister>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
