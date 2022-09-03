import React, { useState } from "react";
import styled from "styled-components";
import { questionFeedback } from '../data/reviewText'

const ResultsContainer = ({ score }) => {
    const [expandCard, setExpandCard] = useState(false)

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: white;
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
        margin: 0;
    `

    const CardText = styled.p`
        font-size: 1.5rem;
    `

    const Button = styled.div`
        background-color: var(--vivid-green);
        font-size: 1.7rem;
        color: white;
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

    const MoreInfo = styled.div`
        color: red;
    `

    // 2 Categories -> 1-3 score and 4-5 score
    const goodWorkText = () => {
        return `You got a ${score}! Nice job, but you can always make a bigger impact. Check out more ways to fight climate change below!`
    }
    const needsImprovementText = () => {
        return `You got a ${score}. You can make a bigger positive impact on saving the world. Check out more ways to fight climate change below!`
    }
    
    return(
        <Container>
            <CardTitle>Your Results</CardTitle>
            <CardText>{score > 3 ? goodWorkText() : needsImprovementText()}</CardText>
            <Button onClick={() => setExpandCard(!expandCard)}>Reduce Your Footprint (+)</Button>
            {/* Will break this into a separate component */}
            {/* This will allow me to move the data to that component */}
            { expandCard && <MoreInfo>
                I am more info
            </MoreInfo> } 
        </Container>
    )
};

export default ResultsContainer;