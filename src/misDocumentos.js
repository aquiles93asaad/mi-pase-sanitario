import React, { useEffect, useState } from 'react';
import {
  useLocation, useNavigate,
} from 'react-router-dom';
import logo from './miargentina-logo.svg';
import ministerioLogo from './MinisterioDeSalud.svg';
import './App.css';
import { useJwt } from 'react-jwt';
// wcUCTlUo11yw1TKLF478DL3X6XxY5s1r

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function MisDocumentos() {
  const navigate = useNavigate();
  const [persona, setPersona] = useState('');
  let query = useQuery();
  const { decodedToken } = useJwt(query.get('token'));
  useEffect(() => {
    if (decodedToken && decodedToken.persona) {
      if (decodedToken.persona.indexOf('AKHIL') !== -1) {
        setPersona('AKHIL');
      } else if (decodedToken.persona.indexOf('MARIANA') !== -1) {
        setPersona('MARIANA');
      } else if (decodedToken.persona.indexOf('MERCEDES') !== -1) {
        setPersona('MERCEDES');
      }
    }
  }, [decodedToken]);

  const goToCertificado = () => {
    navigate(`/billetera/cerificado-vacunacion-covid?token=${query.get('token')}`);
  };

  return (
    <div className="App">
      <header className="container-fluid" id="header">
        <div className="row">
          <div className="navbar navbar-top navbar-default nav-header-dashboard" role="navigation" aria-labelledby="Mi cuenta">
            <div className="nav navbar-nav navbar-header m-y-1 m-l-2">
              <a href="#">
                <i className="visible-xs fa fa-reorder icon-init sm-r-1" id="btn-mobile"></i>
              </a>
              <a href="https://mi.argentina.gob.ar/" id="logo">
                <img alt="Mi Argentina" title="Mi Argentina" src={logo} className="brand-icon" height="40" />
                <h1 className="sr-only">Mi Argentina</h1>
              </a>
            </div>
            <nav className="dropdown nav navbar-nav navbar-right navbar-right-mobile navbar-right-header m-y-1">
              <button className="text-primary btn btn-link dropdown-toggle m-t-0 m-r-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Mi cuenta </span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </nav>
          </div>
        </div>
      </header>
      <main role="main" className="container-fluid" id="primaryContent">
        <div className="row dashboard" id="dashboard">
          <div className="col-md-12 main-main m-y-2" id="main">
            <div className="row" id="titleSection">
              <div className="col-md-12">
                <h1 id="page-title">Mis documentos</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 main-left">
                <div className="row panels-row panels-row-miargentina">
                  <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-default panel-nolink panel-border-gray panel-credenciales">
                      <div className="panel-heading">
                        <h2 id="certificado-title">Certificado vacunación COVID-19</h2>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-12" style={{ marginBottom: '20px', textAlign: 'center'}}>
                            <img src={`../qr-${persona}.png`} style={{ maxWidth: '60%' }}/>
                          </div>
                          <div className="col-md-12">
                            <small className="fontFamily dosis">Dosis aplicadas</small>
                            <p style={{fontSize: '16px', marginBottom: '20px'}}>
                              <b className="fontFamily">2</b>
                            </p>
                          </div>
                          <div className="col-md-12">
                            <img src={ministerioLogo} alt="logo de Ministerio de Salud" width="200" />
                              <p style={{marginBottom: '20px', marginTop: '24px'}}>
                                <small className="fontFamily dosis">Datos suministrados por la jurisdicción que aplicó la vacuna.</small>
                              </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel-footer">
                        <a onClick={goToCertificado} id="detalleCertificadoVacunacionCovid"
                        className="btn btn-primary btn-block">Ver certificado</a>
                        <div>
                          <button id="decargarCertificadoCovid" className="btn btn-link btn-block">Descargar certificado</button>
                        </div>
                        <div className="panel-content-bottom" style={{margin: "0px -20px"}}>
                          <a id="external-link" className="fontFamily" href="https://www.argentina.gob.ar/miargentina/servicios/vacuna_covid" target="_blanck">
                            Conocé más sobre el certificado de vacunación COVID-19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12" aria-live="polite">
                    <div className="panel panel-default panel-nolink panel-border-primary panel-credenciales">
                      <div className="panel-heading">
                        <h2>Constancia de CUIL</h2>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-8">
                            <small>Número de CUIL</small>
                            <p><b>20-95164385-9</b></p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <img src="/img/logos/anses.svg" style="max-width: 100%;" className="m-y-1" height="20" />
                          </div>
                        </div>
                      </div>
                      <div className="panel-footer">
                        <p><a href="https://mi.argentina.gob.ar/billetera/constancia-de-cuil" id="detalleConstanciaCUIL">Ver más información</a></p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MisDocumentos;
