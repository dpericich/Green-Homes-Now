import React, { useState } from "react";
import styled from "styled-components";
import MoreActionInfo from "./MoreActionInfo";
import { cardGetInvolved } from '../data/reviewText';

const ActNowContainer = () => {
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
        margin-top: .9rem;

        &:active {
            transform: translateY(2px);
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

    const buttonText = expandCard ? "(Hide) Act Now" : "Act Now"

    return(
        <Container>
            <CardTitle>More Ways to Save the Planet</CardTitle>
            <CardText>Making your home green is only the start! Check out more ways to fight climate change and save the world!</CardText>
            { expandCard && 
                <>
                    <Spacer></Spacer>
                    <MoreActionInfo moreInfo={cardGetInvolved} />
                </>
             } 
            <Button onClick={() => setExpandCard(!expandCard)}>{buttonText}</Button>
        </Container>
    )
};

export default ActNowContainer;