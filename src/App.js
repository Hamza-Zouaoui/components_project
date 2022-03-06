
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar1 from './Components/Navbar/Navbar';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
     <Navbar1 />
     <ProfilePhoto />
     <FullName />
     <Address />
     <Footer /> 
    </div>
  );
}

export default App;
