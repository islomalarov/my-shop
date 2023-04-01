export interface IItem {
    id: number,
    model: string,
    name: string,
    price: number,
    qty: number,
    characteristics: string,
    cover: string,
    isBuy? : boolean
}