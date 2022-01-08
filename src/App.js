import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Cerificado from './certificado';
// wcUCTlUo11yw1TKLF478DL3X6XxY5s1r
import MisDocumentos from './misDocumentos';
import ResultadoQr from './resultadoQr';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/billetera"
          element={<MisDocumentos />}
        />
        <Route
          path="/billetera/cerificado-vacunacion-covid"
          element={<Cerificado />}
        />
        <Route
          path="/carnetCovid/v2/miArgentina/covid/carnet/validar/img"
          element={<ResultadoQr />}
        />
        <Route path="/" element={<Navigate replace to="/billetera" />} />
      </Routes>
    </Router>
  );
}

export default App;
