import React, { useState } from "react";
import styled from "styled-components";

const QuestionChoice = ({ question }) => {
    const [checked0, setChecked0] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const checks = [checked0, checked1, checked2, checked3];
    
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

    const updateChecked = async (index, value) => {
        await setChecked0(false);
        await setChecked1(false);
        await setChecked2(false);
        await setChecked3(false);

        // Call callback hook here to set the value for the App.js question state

        if (index === 0) {
            setChecked0(true);
        } else if (index === 1) {
            setChecked1(true);
        } else if (index === 2) {
            setChecked2(true)
        } else {
            setChecked3(true)
        };
    }

    return(
        <Container>
            <QuestionText>{question.question.text}</QuestionText>
            {question.answers.map((answer, index) => (
                <AnswerContainer>
                    <AnswerInput 
                        type="checkbox" 
                        value={answer.value}
                        idx={index}
                        checked={checks[index]}
                        onChange={() => updateChecked(index, answer.value)}
                    />
                    <AnswerText>{answer.text}</AnswerText>
                </AnswerContainer>
            ))}
        </Container>
    )
};

export default QuestionChoice;