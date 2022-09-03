import React from 'react';
import styled from 'styled-components';
import QuestionChoice from './QuestionChoice';
import { questions } from '../data/questions';

const QuizPage = ({ moveToResults }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        width: 45%;
        margin: 2rem;

        @media screen and (max-width: 1200px) {
            width: 70%;
        }

        @media screen and (max-width: 900px) {
            width: 70%;
        }

        @media screen and (max-width: 600px) {
            width: 100%;
            margin: 1rem;
        }
    `

    const QuizPageTitle = styled.h3`
        color: white;
        font-size: 3rem;
    `

    const SubmitQuizButton = styled.div`
        background-color: var(--vivid-green);
        font-size: 1.7rem;
        color: white;
        width: 14rem;
        text-align: center;
        margin-top: 1.3rem;
        padding: 1.5rem 0;
        border-radius: 5px;
        box-shadow: 3px 3px rgba(255,255,255, 0.6);

        &:active {
            transform: translateY(10px);
        }


        &:hover {
            color: black;
            cursor: pointer;
            transform: scale(0.98);
        }
    `
    return(
        <Container>
            <QuizPageTitle>Make Your Home Green!</QuizPageTitle>
            {questions.map(question => (
                <QuestionChoice question={question}></QuestionChoice>
            ))}
            <SubmitQuizButton onClick={moveToResults}>Submit</SubmitQuizButton>
        </Container>
    )
};

export default QuizPage;