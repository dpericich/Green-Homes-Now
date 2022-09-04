import React from "react";
import styled from "styled-components";

const QuestionChoice = ({ question }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        align-items: flex-start;
        width:100%;
        padding: 1rem 0 4rem;
        margin: 2rem;
        background-color: white;
        box-shadow: 6px 6px 14px rgba(38, 215, 128, .6);
        border-radius: 5px;
    `

    const QuestionText = styled.h3`
        text-align: left;
        font-size: 2.5rem;
        padding: 0 1rem;
    `

    const AnswerContainer = styled.div`
        display: flex,
        flex-direction: row;
        padding: 0 1.5rem;
    `

    const AnswerInput = styled.input`
        color: red;
        margin-right: 1.5rem;
    `

    const AnswerText = styled.label`
        font-size: 2rem;

        @media screen and (max-width: 600px) {
            font-size: 1.5rem;
        }
    `

    // Need to verify that this is radio so I can't have multiple elements

    return(
        <Container>
            <QuestionText>{question.question.text}</QuestionText>
            {question.answers.map(answer => (
                <AnswerContainer>
                    <AnswerInput type="checkbox" value={answer.value}></AnswerInput>
                    <AnswerText>{answer.text}</AnswerText>
                </AnswerContainer>
            ))}
        </Container>
    )
};

export default QuestionChoice;