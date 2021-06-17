import React from 'react';
import useCarousel from '../hooks/useCarousel';
import styled from '@emotion/styled';

const Titulo = styled.h3`
    font-weight: 700;
    font-size: 5rem;
    color: #fff;
    text-transform: uppercase;
    -webkit-text-stroke: 2px black;
`
const Parrafo = styled.p`
    font-size: 2.5rem;

`

const Carousel = () => {

    const imagenes = useCarousel()
    
    let imagenesTemp = []
    let tituloTemp=[]
    let parrafoTemp=[]
    imagenes.map(imagen=>{
        imagenesTemp.push(imagen.imagen.fluid.srcSet)
        tituloTemp.push(imagen.titulo)
        parrafoTemp.push(imagen.parrafo)
    })
    //console.log(imagenesTemp)
    return ( 
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1500">
                        <img src={imagenesTemp[4]} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <Titulo>{tituloTemp[4]}</Titulo>
                            <Parrafo>{parrafoTemp[4]}</Parrafo>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src={imagenesTemp[1]} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <Titulo>{tituloTemp[1]}</Titulo>
                            <Parrafo>{parrafoTemp[1]}</Parrafo>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src={imagenesTemp[2]} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <Titulo>{tituloTemp[2]}</Titulo>
                            <Parrafo>{parrafoTemp[2]}</Parrafo>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src={imagenesTemp[3]} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <Titulo>{tituloTemp[3]}</Titulo>
                            <Parrafo>{parrafoTemp[3]}</Parrafo>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src={imagenesTemp[0]} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <Titulo>{tituloTemp[0]}</Titulo>
                            <Parrafo>{parrafoTemp[0]}</Parrafo>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
     );
}
 
export default Carousel;