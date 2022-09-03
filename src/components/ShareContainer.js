import React from "react";
import styled from "styled-components";
import { cardSpreadTheWord } from '../data/reviewText'

const ShareContainer = () => {
    // Going to need a different color or image background
    // REALLY need to draw attention to this part
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

    // This needs to have a different color or something to immediately draw attention
    return(
        <Container>
            <h3>Make a Bigger Impact</h3>
            <p></p>
            <div>Button or 2 Buttons</div>
        </Container>
    )
};

export default ShareContainer;