import React from 'react';
import styled from 'styled-components';

const IntroPage = ({ moveToQuiz }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        margin: 2rem;
        padding: 3rem 1rem;
        width: 40%;
        box-shadow: 6px 6px 14px rgba(38, 215, 128, .6);
        border-radius: 5px;


        @media screen and (max-width: 1200px) {
            width: 70%;
        }

        @media screen and (max-width: 900px) {
            width: 70%;
        }

        @media screen and (max-width: 600px) {
            width: 90%;
        }
    `

    const CallToActionTitle = styled.h3`
        margin: 0;
        font-size: 3rem;
    `

    const CallToActionText = styled.p`
        font-style: italic;
        width: 80%;
        font-size: 1.5rem;
        padding: .7rem 0;
        line-height: 1.3
    `

    const CallToActionButton = styled.div`
        background-color: var(--vivid-green);
        font-size: 1.7rem;
        color: white;
        width: 16rem;
        text-align: center;
        padding: 1.5rem 0;
        border-radius: 5px;
        box-shadow: 3px 3px rgba(0,0,0, 0.15);

        &:active {
            transform: translateY(10px);
        }


        &:hover {
            color: black;
            cursor: pointer;
            transform: scale(0.98);
        }
    `

    return(
        <Container>
            <CallToActionTitle>Fight Climate Change from Home</CallToActionTitle>
            <CallToActionText>Our homes produce over one eighth of our national emissions. <span style={{fontWeight: "bold"}}>Take this quiz to determine how best to lower your home's footprint!</span></CallToActionText>
            <CallToActionButton onClick={moveToQuiz}>Make a Change</CallToActionButton>
        </Container>
    )
};

export default IntroPage;