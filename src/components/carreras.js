import React from 'react';  
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react';

export const query = graphql`
query($slug: String!){
	allDatoCmsCarrera(filter: {slug: {eq : $slug}} ){
        nodes{
            titulo
            subtitulo
            contenido
            imagen{
                gatsbyImageData
            }
            requisitos{
                encabezado
                requisito
                id
            }
            imagenvertical{
                gatsbyImageData
            }
        }
    }
}
`

const CarreraTemplate = ({data: {allDatoCmsCarrera: {nodes}}}) => {

    const {titulo, subtitulo,  requisitos, imagenvertical} = nodes[0]
    const ima = getImage(imagenvertical)
    //console.log(nodes[0])

    return ( 
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1500px;
                    width: 95%;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                        font-size: 5rem;
                    `}
                >{titulo}</h1>
                <h3
                    css={css`
                    text-align: center;
                    margin-top: 4rem;
                    font-size: 4rem;
                `}
                >{subtitulo}</h3>
                <div
                    css={css`
                        display: flex;
                        justify-content: space-between;

                        .imagenCarrera{
                            width: 50%;
                            margin: auto auto;
                        }
                    `}
                >
                    <GatsbyImage image={ima} alt='imagenCarrera' className='imagenCarrera'/>
                    <div
                        css={css`
                            text-align:right;
                        `}
                    >
                    {
                        requisitos.map(requisito=>{
                            return(
                                <>
                                    <h2>{requisito.encabezado}</h2>
                                    <p>{requisito.requisito}</p>
                                </>
                            )
                            
                        })    
                    }
                    </div>
                </div>
                
                
            </main>
        </Layout>

     );
}
 
export default CarreraTemplate;