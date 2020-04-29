import { Local } from './local';
import { Ingresso } from './ingresso';

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