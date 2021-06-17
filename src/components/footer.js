import React from 'react';
import {css} from '@emotion/react'
import Navegacion from './nav'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const EnlaceHome = styled(Link)`
    color: #000;
    text-align: center;
    text-decoration:none;
`

const Footer = ({title}) => {

    const year=new Date().getFullYear()
    return ( 
        <>
            <footer
                css={css`
                    background-image: radial-gradient(circle at 13.92% 43.64%, #ffffff 0, #ffffff 8.33%, #ffffff 16.67%, #ffffff 25%, #ffffff 33.33%, #f7ffff 41.67%, #e2ffff 50%, #cdf6f9 58.33%, #b9edf5 66.67%, #a7e5f2 75%, #97ddf1 83.33%, #8ad5f0 91.67%, #7fcef0 100%);
                    margin-top: 5rem;
                    padding:1rem;
                    
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0 auto;

                        @media(min-width:768px){
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `}
                >
                    <Navegacion/>
                    <EnlaceHome
                        to='/'
                    >
                        <h1>
                            ELMH I.A.P.
                        </h1>
                    </EnlaceHome>
                    
                    
                </div>
            </footer>
            <div
                css={css`
                    text-align:center;
                    color:#fff;
                    background-color: rgb(33,44,55);
                    margin:0;
                    padding: 1rem;
                `}
            >
                <p>{title}. Todos los derechos reservados {year} &copy;</p>
            </div>

        </>
     );
}
 
export default Footer;