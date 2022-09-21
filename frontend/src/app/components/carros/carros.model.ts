export interface Carro {
    id?: number,
    marca: string,
    modelo: string,
    versao: string,
    preco: number | null,
    cor: string,
    alarme: boolean,
    airbag: boolean,
    teto_solar: boolean
};