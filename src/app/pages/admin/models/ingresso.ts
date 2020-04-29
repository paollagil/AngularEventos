import { Cliente } from './cliente';
import { Evento } from './evento';

export class Ingresso {
    id: number;
    data_compra: Date;
    cliente: Cliente;
    evento: Evento;
}