import React from 'react';
import styled from 'styled-components';

const MoreResultsInfo = ({ moreInfo }) => {
    const Container = styled.div`

    `

    const Question = styled.p`
        font-size: 1.5rem;
        font-weight: 600;
        margin: 1rem 0 0; 
    `

    const Text = styled.p`
        font-size: 1.3rem;
    `

    return(
        <>
            { moreInfo.map(item => (
                <Container key={item.name}>
                    <Question>{item.name}</Question>
                    <Text>{item.text}</Text>
                </Container>
            ))}
        </>
    )
};

export default MoreResultsInfo;