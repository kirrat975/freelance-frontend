import './App.css';
import Home from './components/Home';
import Bjoin from './components/Bjoin';
import Sjoin from './components/Sjoin';
import Signin from './components/Signin';
import Ppolicy from './components/Ppolicy';
import TermsofS from './components/TermsofS';
import Settings from './components/Settings';
import Bubillpage from './components/Bubillpage';
import Sebillpage from './components/Sebillpage';
import BuyerHp from './components/BuyerHp';
import PostPR from './components/PostPR';
import SellerDash from './components/SellerDash';
import BProfile from './components/BProfile';
import Sprofile from './components/Sprofile';
import BmanageReq from './components/BmanageReq';
import BuyerOrder from './components/BuyerOrder';
import Sellerorders from './components/Sellerorders';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { HashRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
  <HashRouter>
  <UserAuthContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/bjoin" element={<Bjoin/>}></Route>
      <Route path="/sjoin" element={<Sjoin/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/policy" element={<Ppolicy/>}></Route>
      <Route path="/ftos" element={<TermsofS/>}></Route>
      <Route path="/set" element={<Settings/>}></Route>
      <Route path="/billby" element={<Bubillpage/>}></Route>
      <Route path="/billsel" element={<Sebillpage/>}></Route>
      <Route path="/buyhp" element={<BuyerHp/>}></Route>
      <Route path="/selld" element={<SellerDash/>}></Route>
      <Route path="/postpr" element={<PostPR/>}></Route>
      <Route path="/buprof" element={<BProfile/>}></Route>
      <Route path="/seprof" element={<Sprofile/>}></Route>
      <Route path="/bidman" element={<BmanageReq/>}></Route>
      <Route path="/bmord" element={<BuyerOrder/>}></Route>
      <Route path="/selord" element={<Sellerorders/>}></Route>
    
    </Routes>
    </UserAuthContextProvider>
  </HashRouter>

    </div>
    
   
  );
}

export default App;
