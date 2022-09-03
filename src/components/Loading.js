import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    const LoadingContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0 1rem;

        @media screen and (max-width: 450px) {
            width: 80%;
        }
    `
    
    const Logo = styled.img`
        width: 40rem;
        height: 40rem;

        @media screen and (max-width: 450px) {
            width: 30rem;
            height: 30rem;
        }
    `

    const LoadingText = styled.p`
        color: white;
        font-size: 4rem;
        margin: 0;
    `


    return(
        <LoadingContainer>
            <Logo src="android-chrome-512x512.png" />
            <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
    )
};

export default Loading;