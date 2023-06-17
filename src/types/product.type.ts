import { IClient } from "./client.type";

export interface IProduct {
    codigo: string,
    count: string,
    nome: string,
    price: number,
    linha?: string,
    subLinha?: string,
    estoque: boolean,
}