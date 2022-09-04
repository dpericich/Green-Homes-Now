import React, { useState } from "react";
import styled from "styled-components";
import MoreResultsInfo from "./MoreResultsInfo";
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
        margin-top: 0.9rem;

        &:active {
            transform: translateY(10px);
        }


        &:hover {
            color: black;
            cursor: pointer;
            transform: scale(0.98);
        }
    `

    const Spacer = styled.div`
    background-color: black;
    width: 90%;
    height: .1rem;
`

    // 2 Categories -> 1-3 score and 4-5 score
    const goodWorkText = () => {
        return `<span style="font-weight:bold;font-size:1.6rem">You scored a ${score} OUT OF 5</span><br> Nice job, but you can always make a bigger impact. Check out more ways to fight climate change below!`
    }
    const needsImprovementText = () => {
        return `<span style="font-weight:bold;font-size:1.6rem"><br>YOU SCORED A ${score} OUT OF 5</span><br> You can make a bigger positive impact for saving the world. Check out more ways to fight climate change below!`
    }

    const resultsText = score > 3 ? goodWorkText() : needsImprovementText()

    const buttonText = expandCard ? "Reduce This Footprint" : "Reduce Your Footprint"
    
    return(
        <Container>
            <CardTitle>Your Results</CardTitle>
            <CardText dangerouslySetInnerHTML={{__html: resultsText}}></CardText>
            { expandCard && 
                <>
                    <Spacer></Spacer>
                    <MoreResultsInfo moreInfo={questionFeedback} />
                </>
             } 
            <Button onClick={() => setExpandCard(!expandCard)}>{buttonText}</Button>
        </Container>
    )
};

export default ResultsContainer;