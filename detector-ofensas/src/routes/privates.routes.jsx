import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import GerenciaOfensas from '../pages/GerenciaOfensas'

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gerenciar-ofensas" element={<GerenciaOfensas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes;