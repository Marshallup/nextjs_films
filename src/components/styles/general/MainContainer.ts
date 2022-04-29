import styled from "styled-components";

const MainContainer = styled.div<{ withPadding?: boolean }>`
    max-width: 1800px;
    margin: 0 auto;
    ${({ withPadding = true }) => withPadding && `
        padding: 0 30px;
    `}
`;

export default MainContainer;