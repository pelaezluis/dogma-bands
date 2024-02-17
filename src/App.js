import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from "./pages/Layout"
import { BandInfo } from './pages/BandInfo';
import { Rockbita } from './components/Rockbita';

function App() {

  const dualityMembers = [
    "Ana Mendoza - Vocalista", "Jairo Meza - Baterista", "Miguel Paez - Vocalista", "Luis Pelaez - Guitarrista", "Eric Ramirez - Bajista"
  ]
  const randomMembers = [
    "Ricardo Garcia - Bajista", "Miguel Paez - Vocalista", "Eric Ramirez - Guitarrista", "Carlos Zuleta - Baterista"
  ]

  return (
    <>
      <Routes>    
        <Route path='/' element={<Layout />}>
          <Route path='/duality' element={<BandInfo title={'Duality'} description={<Rockbita />} members={dualityMembers}/>} />
          <Route path='/random-shift' element={<BandInfo title={'Random Shift'} members={randomMembers}/>} />
          <Route path='/rockbita' element={<BandInfo title={'Rockbita'} description={<Rockbita />}  />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
