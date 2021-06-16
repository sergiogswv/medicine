import React from 'react';  
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContenedorPrincipal = styled.div`
    margin: 0 auto;
    width: 100%;

    .banner{
        margin-top: -10%;
        z-index: -1;
        align-items: center;
        align-content: center;
    }
`
const ContenedorSecundario =styled.div`
    margin-top: -20%;
    z-index: 2;
    background-color: #fff;
    height: auto;
    padding-top: 2.5%;
    h1{
        text-align: center;
        margin-top: 5rem;
        font-size:3rem;
    }
`

export const query = graphql`
query($slug: String!){
	allDatoCmsService(filter: {slug: {eq : $slug}} ){
        nodes{
            titulo
            imagen{
                gatsbyImageData
            }
            contenido{
                titulo
                descripcion
            }
        }
    }
}
`


const ServiceTemplate = ({data: {allDatoCmsService: {nodes}}}) => {

    //console.log(nodes[0])
    const {titulo, imagen, contenido} = nodes[0]
    const ima = getImage(imagen)
    //console.log(nodes)
    return ( 
        <Layout>
            <ContenedorPrincipal>
                
                <GatsbyImage image={ima} alt='imagenService' className='banner' />
                <ContenedorSecundario>
                    <h1>{titulo}</h1>
                    {
                        contenido.map(content=>{
                            return(
                                <div
                                    css={css`
                                        h2{
                                            text-align:center;
                                            font-weight: 400;
                                            text-transform: uppercase;
                                            padding-top: 2rem;
                                        }
                                    `}
                                >
                                    <h2>{content.titulo}</h2>
                                    <main
                                        css={css`
                                            max-width: 1200px;
                                            width:50%;
                                            text-align: center;
                                            margin: 0 auto;
                                            padding-top: 1rem;
                                        `}
                                    >
                                        <p>{content.descripcion}</p>
                                    </main>
                                    
                                </div>
                            )
                        })
                    }
                </ContenedorSecundario>
            </ContenedorPrincipal>
        </Layout>

     );
}
 
export default ServiceTemplate;