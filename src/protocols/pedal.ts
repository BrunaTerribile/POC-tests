export type PedalEntity ={
    id: number,
    model: string,
    brand: string,
    value: number,
    quantity: number
}

export type PedalInput = Omit<PedalEntity, "id">

export type Pedal = Omit<PedalEntity, "quantity">