import saleRepository from "../repositories/sales-repository.js"

async function createSale(id: number, customer: string) {
    saleRepository.updateStock(id)
    const result = await saleRepository.addSale(id, customer)
    return result;
}

async function getSales(){
    const result = await saleRepository.getAll()
    return result;
}

async function getSalesRank(){
    const result = await saleRepository.getRank()
    return result;
}

async function deleteOne(id: number){
    const result = await saleRepository.cancelSale(id)
    return result;
}

const saleService = {
    createSale,
    getSales,
    getSalesRank,
    deleteOne
}

export default saleService;