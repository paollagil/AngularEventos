import { Local } from './local';

export class Evento {
    idEvento: number;
    nome: string;
    dataHora: Date;
    quantidadeIngresso: number;
    indicador: number;
    valorIngresso: number;
    dataLimite: Date;
    descricao: string;
    local: Local;
}
