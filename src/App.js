import Navbar from './Navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from './HomePage';
import GarageWale from './Garagewale';
import EndUser from './EndUser';
import UserForm from './UserForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
        <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/garagewale" element={<GarageWale/>}></Route>
          <Route exact path="/enduser" element={<EndUser/>}></Route>
          <Route exact path="/userform" element={<UserForm/>}></Route>
        </Routes>
    
    </div>
    </Router>
  );
}

export default App;
