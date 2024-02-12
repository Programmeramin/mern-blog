import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import SingIn from './pages/SingIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import FooterCom from './components/Footer'


function App() {
  
  return (
    <>
     
     <BrowserRouter>
     <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/sign-in' element={<SingIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
       </Routes>
       <FooterCom/>
     </BrowserRouter>
   
    </>
  )   
}

export default App
