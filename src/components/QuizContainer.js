import React from 'react';
import styled from 'styled-components';

const QuizContainer = ({ moveToResults }) => {
    return(
        <div>
            <p>I am the Quiz Container</p>
            <div onClick={moveToResults}>Submit</div>
        </div>
    )
};

export default QuizContainer;