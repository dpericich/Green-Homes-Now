import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
    
const Header = ({ scrollToTop}) => {
    const headerPositionRef = useRef(null);

    const Heading = styled.h1`
        background-color: var(--vivid-green);
        padding: 3rem;
        margin: 0;
        color: white;
        font-size: 5rem;

        @media screen and (max-width: 900px) {
            font-size: 4rem;
        }

        @media screen and (max-width: 600px) {
            font-size: 3.5rem;
        }

        @media screen and (max-width: 400px) {
            font-size: 3rem;
        }
    `
    if (scrollToTop) {
        headerPositionRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return(
        <Heading ref={headerPositionRef}>Green Homes Now</Heading>
    )
};

export default Header;