export interface IProduct {
    id: number,
    nameProduct: string,
    priceProduct: string,
    quantity: number,
    image: string,
}
export type IProductForm = Omit<IProduct, "id">