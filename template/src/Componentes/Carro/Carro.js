import { ContainerCarro, Infos } from './CarroStyle';

export function Carro(props) {
    return (
        <ContainerCarro>
            <h2>Meu carro</h2>
            <Infos>
                <li>Cor: {props.cor}</li>
                <li>Ano: {props.ano}</li>
                <li>Flex: {props.flex}</li>
                <li>Adicionado: {props.adicionadoPor}</li>
            </Infos>
        </ContainerCarro>
    );
}
