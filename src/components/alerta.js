import React from 'react';  
import {css} from '@emotion/react' 
import {Link} from 'gatsby'

const Alerta = () => {
    return ( 
       <>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <h1 css={css`text-align: center;`}><strong>¡Inscribete!</strong> a nuestra Licenciatura de Medicina. <Link to={'/servicios/escuela/tramites-escolares/medicina'}>Click Aquí</Link></h1>
          
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
       </>
     );
}
 
export default Alerta;