import React from 'react';
import styled from 'styled-components';

const MoreActionInfo = ({ moreInfo }) => {
    const Container = styled.div`
        text-align: left;

        @media screen and (max-width: 600px) {
            width: 90%
        }
    `

    const Title = styled.p`
        font-size: 1.5rem;
        font-weight: 600;

    `

    const Text = styled.p`
        font-size: 1.3rem;
    `

    const SiteLink = styled.a`
        font-size: 1.3rem;
        text-decoration: none;

        &:active,
        &:visited {
            color: black
        }

        &:hover {
            color: var(--vivid-green);
        }
    `

    return(
        <>
            { moreInfo.map(item => (
                <Container key={item.name}>
                    <SiteLink href={item.link}>
                        <Title>{item.name}</Title>
                    </SiteLink> 
                    <Text>{item.text}</Text>
                </Container>
            ))}
        </>
    )
};

export default MoreActionInfo;