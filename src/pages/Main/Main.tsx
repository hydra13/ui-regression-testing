import styled from 'styled-components';

const TextWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a0e51;
    color: #d6d6d6;
    font-size: 64px;
`;

export const Main = () => {
    return (
        <TextWrapper>
            <div>Main</div>
        </TextWrapper>
    );
};
