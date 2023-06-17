export interface IProduct {
    codigo: string,
    count: number | undefined,
    nome: string,
    price: number,
    linha?: string,
    subLinha?: string,
    estoque: boolean,
}