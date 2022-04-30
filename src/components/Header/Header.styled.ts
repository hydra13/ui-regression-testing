import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 32px;
    background-color: #2b2b2b;
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    
    text-decoration: none;
    line-height: 100%;
    color: #d8d8d8;

    :hover {
        color: #d8d8d8;
        background-color: #0f646e;
        text-decoration: underline;
    };
    :active {
        color: #d8d8d8;
        background-color: #083d43;
    }
`;
