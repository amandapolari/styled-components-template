import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Helvetica';
    }

    body {
        background: #ccc;
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
