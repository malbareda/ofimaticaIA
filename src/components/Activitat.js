import React from 'react';
import activitats from '../config/activitats';

/**
 * Embolcalla la secció d'activitat d'una sessió.
 *
 * Ús dins del .md de la sessió:
 *
 *   import Activitat from '@site/src/components/Activitat';
 *
 *   <Activitat num={1}>
 *
 *   ## Activitat: Títol de l'activitat
 *   ...contingut...
 *
 *   </Activitat>
 *
 * Quan activitats[num] === true, renderitza el contingut.
 * Quan és false, mostra un avís neutre.
 */
export default function Activitat({ num, children }) {
  if (activitats[num] === true) {
    return <>{children}</>;
  }

  return (
    <div className="activitat-bloquejada">
      <span className="activitat-bloquejada__icona" aria-hidden="true">
        &#x1F512;
      </span>
      <p className="activitat-bloquejada__text">
        L&rsquo;activitat d&rsquo;aquesta sessió encara no està disponible.
        El professorat l&rsquo;obrirà quan arribi el moment.
      </p>
    </div>
  );
}
