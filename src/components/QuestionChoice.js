import React from "react";
import styled from "styled-components";

const TrueFalseChoice = ({  }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem 0 4rem;
        margin: 2rem;
        width: 60%;
        background-color: white;
        box-shadow: 6px 6px 14px rgba(38, 215, 128, .6);
        border-radius: 5px;
    `

    const Question = styled.h3`
        font-size: 2.3rem;
    `

    const AnswerContainer = styled.div`
        display: flex,
        flex-direction: row;
    `

    const AnswerOption = styled.input`
        color: red;
    `

    // Need to verify that this is radio so I can't have multiple elements

    return(
        <Container>
            <Question>Placeholder Question Here</Question>
            {/* Iteratre over the elements here */}
            <AnswerContainer>
                <AnswerOption type="checkbox" value="Answer Option 1"></AnswerOption>
                <label>This is a placeholder for an answer.</label>
            </AnswerContainer>
            <AnswerContainer>
                <AnswerOption type="checkbox" value="Answer Option 1"></AnswerOption>
                <label>This is a placeholder for an answer.</label>
            </AnswerContainer>
            <AnswerContainer>
                <AnswerOption type="checkbox" value="Answer Option 1"></AnswerOption>
                <label>This is a placeholder for an answer.</label>
            </AnswerContainer>
            <AnswerContainer>
                <AnswerOption type="checkbox" value="Answer Option 2"></AnswerOption>
                <label>This is a placeholder for an answer.</label>
            </AnswerContainer>
        </Container>
    )
};

export default TrueFalseChoice;