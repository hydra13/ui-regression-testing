import styled from 'styled-components';

const TextWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0b510a;
    color: #d6d6d6;
    font-size: 64px;
`;

export const Info = () => {
    return (
        <TextWrapper>
            <div>Info</div>
        </TextWrapper>
    );
};
