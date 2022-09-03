import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    const LoadingContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;

        @media screen and (max-width: 450px) {
            width: 80%;
        }
    `

    const LoadingText = styled.p`
        color: white;
        font-size: 4rem;
        margin: 0;
    `

    return(
        <LoadingContainer>
            <img src="android-chrome-512x512.png" />
            <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
    )
};

export default Loading;