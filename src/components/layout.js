import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet'
import useSeo from '../hooks/use-seo'

const Layout = (props) => {

    const seo = useSeo()

    const {siteName, fallbackSeo: {description, title}} = seo

    return ( 
        <>
            <Global 
                styles={css`
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *,*:before, *:after{
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    h1, h2, h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1,h2{
                        font-family: 'Roboto', serif;
                    }
                    h1{
                        font-family: 'PT sans', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>{siteName}</title>
                <meta name='description' content={description}></meta>
                <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' rel='stylesheet'/>
            </Helmet>
            <Header></Header>
            {props.children}
            <Footer 
                title={title}
            />
        </>
     );
}
 
export default Layout;