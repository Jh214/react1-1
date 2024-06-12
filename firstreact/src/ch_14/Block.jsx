import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1em;
    background: gray;
`

const blockItem = [
    {
        label: '1',
        padding: '1rem',
        backgroundColor: 'red'
    },
    {
        label: '2',
        padding: '3rem',
        backgroundColor: 'blue'
    }
]

export default function MainPage() {
    return (
        <Wrapper>
            {blockItem.map((blockItem) => {
                <block
                    padding={blockItem.padding}
                    backgroundColor={blockItem.background}
                >
                    {blockItem.label}
                </block>
            })}
        </Wrapper>
    );
}
