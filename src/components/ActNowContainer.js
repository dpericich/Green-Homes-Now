import React, { useState } from "react";
import styled from "styled-components";
import { cardGetInvolved } from '../data/reviewText'

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

        &:active {
            transform: translateY(2px);
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

    return(
        <Container>
            <CardTitle>More Ways to Save the Planet</CardTitle>
            <CardText>Making a green house is only the start! Check out more ways to fight climate change and save the world!</CardText>
            <Button>Act Now</Button>
        </Container>
    )
};

export default ActNowContainer;