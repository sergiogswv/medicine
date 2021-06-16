import React from 'react';
import Layout from '../components/layout'
import useHistoria from '../hooks/useHistoria';
import HistoriaPreview from '../components/historiaPreview';


const Historia = () => {

    const historias = useHistoria()

    //const historiales = resultado.allDatoCmsHistory.nodes[0]
    //console.log(historiales)
    //const {descripcion} = historiales
    return ( 
        <Layout>
            <h1>Historia</h1>
            {historias.map(historia=>(
                <HistoriaPreview 
                    key={historia.id}
                    historia={historia}
                />
            ))}
        </Layout>

     );
}
 
export default Historia;