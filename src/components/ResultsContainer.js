import React from "react";
import styled from "styled-components";
import { questionFeedback } from '../data/reviewText'

const ResultsContainer = ({ score }) => {
    // Will get the score as a prop
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: white;
        margin: 2rem;
        padding: 3rem 1.25rem;
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
            <div>Reducing Your Footprint (+)</div>
        </Container>
    )
};

export default ResultsContainer;