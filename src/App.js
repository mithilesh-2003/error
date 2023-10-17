import './App.css';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import ContactUs from './ContactUs';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Forgetpassword from './Forgetpassword';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <Router>
      <div>
        <Routes>
          <Route path="/"element={<Login/>}/>
          <Route path="/Login"element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Signup"element={<Signup/>}/>
          <Route path="/ContactUs"element={<ContactUs/>}/>
          <Route path='/Forgetpassword'element={<Forgetpassword/>}/>
        </Routes>
      </div>
     </Router>
  );
}

export default App;
