
import './App.css';
import NavBar from './NavBar';
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import Currency from "./pages/Currency"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Language from "./pages/Language"
import {Route,Routes} from "react-router-dom"


function App() {

  return (
    <>
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/currency' element={<Currency/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/language' element={<Language/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
