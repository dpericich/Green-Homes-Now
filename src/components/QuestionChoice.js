import React from "react";
import styled from "styled-components";

const QuestionChoice = ({ question, questionSetters, questionIndex, selectedIndexValues, selectedIndexSetters }) => {
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
        padding: 0 2rem;
        margin: 1.5rem 0 2rem;
    `

    const AnswerContainer = styled.div`
        display: flex,
        flex-direction: row;
        padding: 0 3rem;
        text-align: left;
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
        const newIndexState = {
            0: index === 0 ? true : false,
            1: index === 1 ? true : false,
            2: index === 2 ? true : false,
            3: index === 3 ? true : false,
        }
        await selectedIndexSetters[questionIndex](newIndexState);
        await questionSetters[questionIndex](value);
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
                        checked={selectedIndexValues[questionIndex][index]}
                        onChange={() => { 
                            updateChecked(index, answer.value);
                        }}
                    />
                    <AnswerText>{answer.text}</AnswerText>
                </AnswerContainer>
            ))}
        </Container>
    )
};

export default QuestionChoice;