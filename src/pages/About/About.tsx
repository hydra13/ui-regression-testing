import styled from 'styled-components';

const TextWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #65016a;
    color: #d6d6d6;
    font-size: 64px;
`;

export const About = () => {
    return (
        <TextWrapper>
            <div>About</div>
        </TextWrapper>
    );
};
