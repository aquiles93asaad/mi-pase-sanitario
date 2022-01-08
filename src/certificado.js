import React, { useEffect, useState } from 'react';
import {
  useLocation, useNavigate,
} from 'react-router-dom';
import './App.css';
import { useJwt } from 'react-jwt';
import clsx from 'clsx';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Cerificado() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
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

  const goToDocumentos = () => {
    navigate(`/billetera?token=${query.get('token')}`);
  };

  const showNextSlide = () => {
    console.log(activeImage);
    if (activeImage !== 2) {
      setActiveImage(activeImage + 1);
    }
  };

  const showPrevSlide = () => {
    console.log(activeImage);
    if (activeImage !== 0) {
      setActiveImage(activeImage - 1);
    }
  };

  return (
    <div className="col-md-12 main-main" id="main">
      <div className="row display-panel-licencia" id="titleSection">
        <div className="col-md-12">
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 main-left">
          <div className="panels-row-miargentina panels-row-licencia m-b-1" aria-live="polite">
            <div className="panel panel-default panel-nolink panel-licencia panel-border-gray">
              <div className="panel-heading hidden-xs">
                <div className="row">
                  <div className="col-md-12">
                    <a onClick={goToDocumentos} className="volver btn btn-link btn-sm pull-left m-r-1">
                      <i className="fa fa-arrow-left"></i>Volver
                    </a>
                    <h2 className="pull-left titulo-con-volver m-y-0">Certificado vacunación COVID-19</h2>
                  </div>
                </div>
              </div>
              <div id="lic-carousel" className="carousel slide" data-interval="false">
                <div className="panel-body body-licencia">
                  <div className="carousel-inner licencia">

                    <div className={clsx("item item-licencia", {
                      "active": activeImage === 0
                    })}>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="col-sm-4 visible-xs">
                            <a data-id="volver" onClick={goToDocumentos} className="volver btn btn-link btn-sm pull-left m-r-1">
                              <i className="fa fa-arrow-left"></i>Volver
                            </a>
                          </div>
                          <p className="hidden-xs m-b-0 text-center"><strong>Frente</strong></p>
                          <p className="pull-left visible-xs">Credencial - Frente</p>
                        </div>
                      </div>
                      <div className="row fila-licencia">
                        <div className="col-md-12">
                          <img className="center-block" src={`../carnet-${persona}.jpeg`} style={{ maxWidth: '100%' }} />
                        </div>
                      </div>
                    </div>

                    <div className={clsx("item item-licencia", {
                      "active": activeImage === 1
                    })}>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="col-sm-4 visible-xs">
                            <a data-id="volver" onClick={goToDocumentos} className="volver btn btn-link btn-sm pull-left m-r-1">
                              <i className="fa fa-arrow-left"></i>Volver
                            </a>
                          </div>
                          <p className="hidden-xs m-b-0 text-center"><strong>Primera</strong></p>
                          <p className="pull-left visible-xs">Credencial - Primera</p>
                        </div>
                      </div>
                      <div className="row fila-licencia">
                        <div className="col-md-12">
                          <img className="center-block" src={`../dosis-1-${persona}.jpeg`} style={{ maxWidth: '100%' }} />
                        </div>
                      </div>
                    </div>

                    <div className={clsx("item item-licencia", {
                      "active": activeImage === 2
                    })}>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="col-sm-4 visible-xs">
                            <a data-id="volver" onClick={goToDocumentos} className="volver btn btn-link btn-sm pull-left m-r-1">
                              <i className="fa fa-arrow-left"></i>Volver
                            </a>
                          </div>
                          <p className="hidden-xs m-b-0 text-center"><strong>Segunda</strong></p>
                          <p className="pull-left visible-xs">Credencial - Segunda</p>
                        </div>
                      </div>
                      <div className="row fila-licencia">
                        <div className="col-md-12">
                          <img className="center-block" src={`../dosis-2-${persona}.jpeg`} style={{ maxWidth: '100%' }} />
                        </div>
                      </div>
                    </div>

                  </div>
                  <a className="left carousel-control control-licencia" onClick={showPrevSlide}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control control-licencia" onClick={showNextSlide}>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <span className="sr-only">Next</span>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 main-right">
        </div>
      </div>
    </div>
  );
}

export default Cerificado;
