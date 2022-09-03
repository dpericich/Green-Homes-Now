import React from "react";
import styled from "styled-components";
import { cardGetInvolved } from '../data/reviewText'

const ActNowContainer = () => {
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

    return(
        <Container>
            <h3>Card Title</h3>
            <p>Card text</p>
            <div>Button</div>
        </Container>
    )
};

export default ActNowContainer;