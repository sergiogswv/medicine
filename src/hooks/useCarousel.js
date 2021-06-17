import { graphql, useStaticQuery } from 'gatsby';

const useCarousel = () => {

    const informacionImg = useStaticQuery(graphql`
    query{
        allDatoCmsCarousel{
            nodes{
                id
                imagen{
                        fluid{
                            srcSet
                    }
                }
                titulo
                parrafo
            }
        }
    }`)
    return informacionImg.allDatoCmsCarousel.nodes.map(cImagen =>({
        imagen: cImagen.imagen,
        id: cImagen.id,
        titulo: cImagen.titulo,
        parrafo: cImagen.parrafo
    }))
   
}
 
export default useCarousel;