import React, { useState } from "react";
import styled from "styled-components";
import { cardSpreadTheWord } from '../data/reviewText'

const ShareContainer = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: var(--vivid-green);
        margin: 2rem;
        padding: 3rem 1.75rem;
        width: 70%;
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

    const CardTitle = styled.h3`
        font-size: 2.5rem;
        color: white;
        margin: 0;
    `

    const CardText = styled.p`
        font-size: 1.5rem;
        color: white;
    `

    const Button = styled.div`
        background-color: white;
        font-size: 1.7rem;
        color: var(--vivid-green);
        width: 25rem;
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
            <CardTitle>Build a Team to Fight Climate Change!</CardTitle>
            <CardText>We’re in this together. Share this link with your friends and family so more people can impact change.</CardText>
            <Button>Button or 2 Buttons</Button>
        </Container>
    )
};

export default ShareContainer;