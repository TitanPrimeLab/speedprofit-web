import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './componentes/Layout'
import SEO from './componentes/SEO'
import Home from './paginas/Home'
import AgentesIA from './paginas/AgentesIA'
import ComoFunciona from './paginas/ComoFunciona'
import CaptacionExclusivas from './paginas/CaptacionExclusivas'
import DisenoWebInmobiliarias from './paginas/DisenoWebInmobiliarias'
import Testimonios from './paginas/Testimonios'
import SobreNosotros from './paginas/SobreNosotros'
import Contacto from './paginas/Contacto'
import Privacidad from './paginas/Privacidad'
import Terminos from './paginas/Terminos'
import PoliticaCookies from './paginas/PoliticaCookies'
import Blog from './paginas/Blog'
import BlogArticulo from './paginas/BlogArticulo'
import NoEncontrada from './paginas/NoEncontrada'

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agentes-ia" element={<AgentesIA />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/captacion-exclusivas" element={<CaptacionExclusivas />} />
          <Route path="/diseno-web-inmobiliarias" element={<DisenoWebInmobiliarias />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticulo />} />

          {/* --- Redirecciones desde las rutas antiguas de Base44 --------------
              IMPORTANTE para SEO: estas URLs están indexadas en Google.
              Sin estas redirecciones perderías el posicionamiento actual. */}
          <Route path="/Home" element={<Navigate to="/" replace />} />
          <Route path="/AgentesIA" element={<Navigate to="/agentes-ia" replace />} />
          <Route path="/ComoFunciona" element={<Navigate to="/como-funciona" replace />} />
          <Route
            path="/CaptacionExclusivas"
            element={<Navigate to="/captacion-exclusivas" replace />}
          />
          <Route path="/Testimonios" element={<Navigate to="/testimonios" replace />} />
          <Route path="/SobreNosotros" element={<Navigate to="/sobre-nosotros" replace />} />
          <Route path="/Contacto" element={<Navigate to="/contacto" replace />} />
          <Route path="/ContactoForm" element={<Navigate to="/contacto" replace />} />
          <Route path="/Privacidad" element={<Navigate to="/privacidad" replace />} />
          <Route path="/Terminos" element={<Navigate to="/terminos" replace />} />

          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
