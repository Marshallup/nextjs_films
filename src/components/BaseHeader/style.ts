import styled, { css } from "styled-components";
const { motion } = require("framer-motion");
import LogoIcon from 'components/Icons/LogoIcon';

export const MainHeaderTopSpace = styled.div`
    padding-top: 23rem;
`;
export const MainHeaderContent = styled.div`
    // margin: 90px 0 20px 0;
`;
export const UnVisibleLogo = styled.div`
    visibility: hidden;
    width: 27.7rem;
`;
export const LogoBigContainer = styled.div`
    margin: 90px 0 20px 0;
    position: relative;
    visibility: hidden;
    width: 100%;
`;
export const LogoContainer = styled.div`
    width: 19rem;
    position: relative;
`;
export const VisibleLogo = styled.div`
    
`;
export const AnimateLogo = styled(motion.div).attrs(({ width }) => ({
    style: {
        width,
    }
}))<{ width: number }>`
    opacity: 0;
    position: absolute;
    transform-origin: top left;
    top: 0;
    z-index: 1;
`;
export const MainHeader = styled.header`
    // margin-top: 32px;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
`;
export const MainHeaderBodyWrapper = styled.div`
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
export const MainHeaderBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const MenuLogo = styled(LogoIcon)`
    width: 100%;
    height: 100%;
`;
export const Title = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    font-family: 'Syne';
    font-size: 34px;
    font-weight: 800;
`;
export const MenuControls = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 710px;
`;
export const MenuSearch = styled.div`

`;
export const MenuNav = styled.nav`

`;
export const MenuList = styled.ul`
    display: flex;
`;
export const MenuItem = styled.li`
    margin-right: 40px;
    &:last-child {
        margin-right: 0;
    }
`;
export const MenuLink = styled.a``;