import React, { useState } from 'react';
import styled from 'styled-components';

const AnswerOptions = () => {
    const [answer, setAnswer] = useState('');
    const [value, setValue] = useState(0);

    // Reset boxes method;

    return(
        <div>
            <AnswerContainer>
                <AnswerOption type="checkbox" value="Answer Option 1"></AnswerOption>
                <label>This is a placeholder for an answer.</label>
            </AnswerContainer>
        </div>
    )
};

export default AnswerOptions