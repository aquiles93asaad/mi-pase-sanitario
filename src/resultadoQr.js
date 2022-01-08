import React, { useEffect, useState } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import './App.css';
import { useJwt } from 'react-jwt';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ResultadoQr() {
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

  return (
    <div style={{ margin: '20px 0', paddingBottom: '30px' }}>
      <div style={{ textAlign: 'center' }}>
        <img className="center-block" src={`/logo_msal.jpg`} width="200" />
      </div>
      <div style={{ margin: '0 20px' }}>
        <p className="qrParagraph">El Ministerio de Salud de la Nación de la República Argentina extiende el presente, conforme el artículo 16 de la Ley 27.491, con los datos sobre el estado de vacunación contra el Covid 19, que identifican a la persona vacunada, el producto, e indican la fecha, la dosis, el lote y el establecimiento de aplicación entre otra información, consignada por la Jurisdicción Nacional, Provincial y/o del Gobierno de la Ciudad Autónoma de Buenos Aires, responsable de la aplicación de la vacuna en el Registro Federal de Vacunación Nominalizado.</p>
        <p className="qrParagraph">This document has been issued by the National Ministry of Health of the Argentine Republic in accordance with Section 16, Law No. 27491. It contains data on COVID-19 vaccination status, identifying the person vaccinated, the vaccine administered, as well as the date, doses, batch and vaccination centre, in addition to other details reported on the Federal Vaccination Roster by the Federal, Provincial and/or Buenos Aires city government authority responsible for vaccine administration.</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <img className="center-block" src={`/carnet-${persona}.jpeg`} style={{ maxWidth: '80%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <img className="center-block" src={`/dosis-1-${persona}.jpeg`} style={{ maxWidth: '80%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <img className="center-block" src={`/dosis-2-${persona}.jpeg`} style={{ maxWidth: '80%' }} /> 
      </div>
    </div>
  );
}

export default ResultadoQr;
