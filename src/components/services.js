import React from 'react';  
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import EscuelaPreview from './escuelaPreview'
import useEscuela from "../hooks/useEscuela"

const ListadoCarreras = styled.ul`
  max-width: 1500px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media(min-width:768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
`

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
            slug
            id
            infohosp {
                titulo
                    descripcion {
                        value
                    }
                
                }
            }
        }
    }
`


const ServiceTemplate = ({data: {allDatoCmsService: {nodes}}}) => {
   
    const escuela = useEscuela()
    
    const {titulo, imagen, slug, id} = nodes[0]
    const ima = getImage(imagen)

    const infohosp = nodes[0].infohosp
    return ( 
        <Layout>
            <ContenedorPrincipal>
                <GatsbyImage image={ima} alt='imagenService' className='banner' />
                {console.log(slug)}
                {/*click en hospital si no... */}
                {slug==='hospital'
                ? (<ContenedorSecundario
                    key={id}
                    >
                    
                    <h1>{titulo}</h1>
                    {
                        infohosp.map(info=>{
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
                                    <h2>{info.titulo}</h2>
                                    <main
                                        css={css`
                                            max-width: 1200px;
                                            width:50%;
                                            text-align: center;
                                            margin: 0 auto;
                                            padding-top: 1rem;
                                        `}
                                    >
                                        {
                                            (info.descripcion.value.document.children).map(parrafo =>{
                                                //console.log(parrafo.children[0].value)
                                                return(
                                                    <p>{parrafo.children[0].value}</p>
                                                )
                                            })
                                            
                                        }
                                    </main>
                                    
                                </div>
                            )
                        })
                    }
                </ContenedorSecundario>)
                : (<ListadoCarreras>
                    {escuela.map(servicios=>(
                        <EscuelaPreview 
                            key={servicios.id}
                            carrera={servicios}
                            bandera={2}
                        />
                    ))}
                    </ListadoCarreras>)}
               
            </ContenedorPrincipal>
        </Layout>

     );
}
 
export default ServiceTemplate;