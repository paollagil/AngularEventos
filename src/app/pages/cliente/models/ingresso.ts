import { Evento } from './evento';
import { Cliente } from './cliente';

export class Ingresso {
    id: number;
    dataCompra: Date;
    cliente: Cliente;
    evento: Evento;
}