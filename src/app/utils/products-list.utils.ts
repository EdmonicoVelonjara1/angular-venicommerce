export enum ClientGender {
    HOMME = "homme",
    FEMME = "femme"
}

export interface IProductsProperties {
    brands: string[];
    models: string[];
}

export const ProductLinkProperties: {[key: string]:IProductsProperties} = {
    [ClientGender.HOMME]: {
        brands: [
            "Adidas",
            "Asics",
            "Birkenstock",
            "Clarks",
            "Havaianas",
            "Hoka",
            "Hi-Tech",
            "Karhu",
            "Mizuno",
            "New Balance",
            "Nike",
            "Filling Pieces",
            "On Runnig",
            "Puma",
            "Reebok",
            "Saucony",
            "Sebago",
            "Stephney Workers Club",
            "Timberland",
            "UGG",
            "Vans",
            "Veja"
        ],
        models: [
            "Air Jordan 1",
            "Nike Air Force 1",
            "Adidas Yeezy Boost 350",
            "Puma Suede Classic",
            "Reebok Club C 85",
            "New Balance 574",
            "Converse Chuck Taylor All Star",
            "Vans Old Skool",
            "Asics Gel-Lyte III",
            "Nike Dunk Low",
            "Adidas Stan Smith",
            "Jordan 4 Retro",
            "Reebok Pump Omni Zone II",
            "New Balance 550",
            "Saucony Jazz Original",
            "Hoka Clifton 8",
            "Salomon XT-6",
            "Nike Blazer Mid '77",
            "Adidas Ultraboost",
            "Fila Disruptor II"
        ]
    },
    [ClientGender.FEMME]: {
        brands: [
            "Adidas",
            "Asics",
            "Birkenstock",
            "Clarks",
            "Havaianas",
            "Hoka",
            "Hi-Tech",
            "Karhu",
            "Mizuno",
            "New Balance",
            "Nike",
            "Filling Pieces",
            "On Runnig",
            "Puma",
            "Reebok",
            "Saucony",
            "Sebago",
            "Stephney Workers Club",
            "Timberland",
            "UGG",
            "Vans",
            "Veja"
        ],
        models: [
            "Air Jordan 1",
            "Nike Air Force 1",
            "Adidas Yeezy Boost 350",
            "Puma Suede Classic",
            "Reebok Club C 85",
            "New Balance 574",
            "Converse Chuck Taylor All Star",
            "Vans Old Skool",
            "Asics Gel-Lyte III",
            "Nike Dunk Low",
            "Adidas Stan Smith",
            "Jordan 4 Retro",
            "Reebok Pump Omni Zone II",
            "New Balance 550",
            "Saucony Jazz Original",
            "Hoka Clifton 8",
            "Salomon XT-6",
            "Nike Blazer Mid '77",
            "Adidas Ultraboost",
            "Fila Disruptor II"
        ]
    }
}