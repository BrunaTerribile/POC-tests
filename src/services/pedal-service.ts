import { PedalInput } from "../protocols/pedal";
import pedalRepository from "../repositories/pedals-repository";
import saleRepository from "../repositories/sales-repository";

async function getAllPedals() {
    const result = await pedalRepository.getAll()
    return result;
}

async function getOnePedal(id: number) {
    const result = await pedalRepository.getById(id)
    return result;
}

async function createPedal(newPedal: PedalInput, quantity: number){
    const result = await pedalRepository.addPedal(newPedal)

    const { id } = result
    await saleRepository.addStock(id, quantity)

    return result;
}

const pedalService = {
    getAllPedals,
    getOnePedal,
    createPedal
}
  
export default pedalService;