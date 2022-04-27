import styled, { css } from "styled-components";

export const MainPromoTabsBlock = styled.ul`
    display: flex;
`;
export const MainPromoTabsItem = styled.li<{ active?: boolean }>`
    margin-right: 2rem;
    padding: 1rem;
    border-radius: 50px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
    ${({ active }) => active && css`
        background: rgba(0, 0, 0, 0.3);
    `}
`;
export const MainPromoTabsLink = styled.div`
    padding: 0 1.5rem;
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;
`;
export const MainPromotTabsContent = styled.div``;