exports.createPages = async({actions, graphql, reporter}) =>{
    const resultado = await graphql(`
    query{
        allDatoCmsCarrera{
            nodes{
                slug
            }
        }
    }
    `)
    const resultadoServices = await graphql(`
    query{
        allDatoCmsService{
            nodes{
                slug
            }
        }
    }
    `)

    //console.log(resultado.data.allDatoCmsCarrera.nodes)

    //si hay error
    if(resultado.error){
        reporter.panic('No hubo resultados', resultado.error)
    }else if(resultadoServices.error){
        reporter.panic('no hubo resultado', resultadoServices.error)
    }

    //si hay paginas, crear las archivos para Carreras
    const carreras = resultado.data.allDatoCmsCarrera.nodes

    carreras.forEach(carrera => {
        actions.createPage({
            path: carrera.slug,
            component: require.resolve('./src/components/carreras.js'),
            context: {
                slug: carrera.slug
            }
        })
    });

    // si hay paginas, crea los archivos para Services
    const services = resultadoServices.data.allDatoCmsService.nodes

    services.forEach(service=>{
        actions.createPage({
            path: `servicios/${service.slug}`,
            component: require.resolve('./src/components/services.js'),
            context:{
                slug: service.slug
            }
        })
    })

    
}