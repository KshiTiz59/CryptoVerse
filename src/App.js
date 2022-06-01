import Crypto from "./Components/Crypto"
import Home from "./Components/Home";
import Cryotonews from "./Components/Cryotonews";
import Desc from "./Components/Desc";
import {
  BrowserRouter ,
  Route,
Routes
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  exact path ="/" element={<Home/>}/> 
    <Route  path="/cryptoprice" element={<Crypto/>}/>
    <Route  path="/cryptonews" element={<Cryotonews/>}/>
    <Route  path="/cryptodesc" element={  <Desc/>}/>
    </Routes> 
    </BrowserRouter>
    );
}

export default App;
