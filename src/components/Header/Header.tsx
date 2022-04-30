import {MenuWrapper, StyledLink} from './Header.styled';

export const Header = () => {
    return (
        <MenuWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/info">Info</StyledLink>
            <StyledLink to="/test-not-found">Test Not Found</StyledLink>
        </MenuWrapper>
    );
};
