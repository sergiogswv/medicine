import * as React from "react"
import Layout from '../components/layout'
import {css} from '@emotion/react'
//import ImagenInicio from '../components/imagenInicio'
import ContenidoInicio from '../components/contenidoInicio'
import CarreraPreview from "../components/carreraPreview"
import useCarrera from "../hooks/useCarrera"
import styled from "@emotion/styled"
import Carousel from '../components/carousel'

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

const IndexPage = () => {

  const carreras = useCarrera()
  //console.log(carreras)
  return( 
    <Layout>
      <Carousel></Carousel>
      {/*<ImagenInicio />*/}
  
      <ContenidoInicio/>
  
      <h2
        css={css`
            text-align: center;
            margin-top: 5rem;
            font-size:3rem;
            
        `}
      >Nuestras Carreras</h2>

      <ListadoCarreras>
        {carreras.map(carrera=>(
            <CarreraPreview 
              key={carrera.id}
              carrera={carrera}
            />
        ))}
      </ListadoCarreras>
    </Layout>
  )
  
}
export default IndexPage
