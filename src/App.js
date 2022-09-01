import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Mainpage from './components/Mainpage';
import Vkinedir from "./components/bmi/Vkinedir"
import Vkihesapla from "./components/bmi/Vkihesapla"
import Yagoraninedir from "./components/yag/Yagoraninedir"
import Yagoranihesapla from "./components/yag/Yagoranihesapla"
import Program from "./components/program/Program"

function App() {
  return (
    <div className="App">

      <div >
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/bminedir" element={<Vkinedir />} />
        <Route path="/bmihesapla" element={<Vkihesapla />} />
        <Route path="/yagoraninedir" element={<Yagoraninedir />} />
        <Route path="/yagoranihesapla" element={<Yagoranihesapla />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </div>
  );
}

export default App;
