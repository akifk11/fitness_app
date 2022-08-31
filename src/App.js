import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Mainpage from './components/Mainpage';
import Bminedir from "./components/bmi/Bminedir"
import Bmihesapla from "./components/bmi/Bmihesapla"
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
        <Route path="/bminedir" element={<Bminedir />} />
        <Route path="/bmihesapla" element={<Bmihesapla />} />
        <Route path="/yagoraninedir" element={<Yagoraninedir />} />
        <Route path="/yagoranihesapla" element={<Yagoranihesapla />} />
        <Route path="/program" element={<Program />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
