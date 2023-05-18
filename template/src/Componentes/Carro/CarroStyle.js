import * as styled from 'styled-components';

export const ContainerCarro = styled.styled.div`
    width: 207px;
    height: 175px;
    background: #ff9937;
    padding: 10px 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    h2 {
        text-align: center;
    }
`;

export const Infos = styled.styled.ul`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    li {
        padding: 10px 5px;
    }
`;
