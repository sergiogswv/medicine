import React from 'react';
import {css} from '@emotion/react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav'

const EnlaceHome = styled(Link)`
    color:#fff;
    text-align: center;
    text-decoration: none;
`

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: #333;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1500px;
                    margin: 0 auto;

                    @media(min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >   
                <EnlaceHome to='/'>
                    <h1>Escuela Libre de Homeopatía de México</h1>
                </EnlaceHome>
                
                
                <Navegacion></Navegacion>
            </div>
        </header>
     );
}
 
export default Header;