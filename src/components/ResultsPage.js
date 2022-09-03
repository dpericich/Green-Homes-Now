import React from "react";
import styled from "styled-components";
import ResultsContainer from "./ResultsContainer";
import ShareContainer from "./ShareContainer";
import ActNowContainer from "./ActNowContainer";

const ResultsPage = ({ score }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: orangered;
        width: 60%;

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


    // Need to make sure that each of these has the same size of initial load content
    // This will keep the heights of the items consistent
    // I want to have different colors for each container
    return(
        <Container>
            <ResultsContainer score={score} />
            <ShareContainer />
            <ActNowContainer />
        </Container>
    )
};

export default ResultsPage;