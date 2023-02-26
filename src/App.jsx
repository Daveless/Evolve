import './App.css'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import { Routes } from 'react-router-dom'
import ClasesGrupales from './pages/ClasesGrupales'
import ClasesIndividuales from './pages/ClasesIndividuales'
import PreparacionCambridge from './pages/PreparacionCambridge'
import Nivelaciones from './pages/Nivelaciones'
import InglesParaNegocios from './pages/InglesParaNegocios'




function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clase-grupal' element={<ClasesGrupales />} />   
        <Route path='/clase-individual' element={<ClasesIndividuales />} />          
        <Route path='/preparacion-cambridge' element={<PreparacionCambridge />} />          
        <Route path='/nivelaciones' element={<Nivelaciones />} />
        <Route path='/ingles-para-negocios' element={<InglesParaNegocios />} />
      </Routes>
    </div>
  )
}

export default App
