import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Header from "./components/Header"
import { LandingPage } from "./pages/Landingpage"
import {CharactersCard} from "./components/CharactersCard"
import {CharacterInfo} from "./pages/CharacterInfo"
import {Login} from "./pages/Login"
import {SignUp} from "./pages/SignUp"
import { About } from "./pages/About"
import {EditUser} from "./pages/EditUser"
import { ShowUsers } from "./pages/ShowUsers"
import Footer from "./components/Footer"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import * as bootstrap from 'bootstrap'
function App() {
  
  return (
    <>     
      <BrowserRouter>
        <section className="container-fluid m-0 p-0">
          <img style={{width: '100%'}} className="img-fluid" src="./src/assets/images/banner.png" alt="" />
        </section>
        <Header/>
        

        <Routes>
          <Route path="/" element = {<LandingPage/>}/>
          <Route path="conocenos" element={<About/>}/>
          <Route path="/characters" element = {<CharactersCard/>}/>
          <Route path="/characters/:characterId" element = {<CharacterInfo/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<SignUp/>}/>
          <Route path="/show-users" element = {<ShowUsers/>}/>
          <Route path="/edit/:userId" element = {<EditUser/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
