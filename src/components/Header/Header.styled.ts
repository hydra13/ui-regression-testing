import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
    width: 100%;
    height: 32px;
    background-color: #0b4e56;
    display: flex;
    justify-content: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    line-height: 100%;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    background-color: #0b4e56;
    color: #d8d8d8;

    :link {color: #d8d8d8}
    :visited {color: #d8d8d8}
    :hover {
        color: #d8d8d8;
        text-decoration: underline;
        background-color: #0f646e;
    };
    :active {
        color: #d8d8d8;
        background-color: #083d43;
    }
`;
