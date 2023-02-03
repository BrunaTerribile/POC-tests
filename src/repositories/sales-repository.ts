import { decompressFromBase64 } from "@prisma/client/runtime/index.js";
import { prisma } from "../database/database.js"

async function getAll(){
    const data = prisma.sales.findMany()
    return data;
}

async function addSale(id: number, customer: string){
    const insert = prisma.sales.create({
        data: {
            pedal_id: id,
            customer: customer
        }
    })
    return insert;
}

async function getRank(){
    // return connection.query(
    //     `SELECT p.brand, p.model, 
    //     COUNT(s.pedal_id) as "Total Sales", 
    //     SUM(p.value) as "Total USD" 
    //     FROM pedals AS p
    //     JOIN sales AS s
    //     ON p.id = s.pedal_id
    //     GROUP BY p.id
    //     ORDER BY "Total Sales" DESC;`
    // );

    const insert = prisma.sales.findMany({
        distinct: ['pedal_id'],
        select: {
            pedal_id: true,
            pedals: {
                select: {
                    model: true,
                    brand: true,
                }
            }
        },
    })
    return insert;

}

async function addStock(id: number, quantity: number){
    const insert = prisma.stock.create({
        data: {
            pedal_id: id,
            quantity: quantity
        }
    })
    return insert;
}

async function updateStock(id: number){
    // const insert = prisma.stock.update({
    //     where: {
    //         pedal_id: id
    //     },
    //     data: {
    //         quantity: {decrement: 1}
    //     }
    // })
    
    // return insert;
}

async function cancelSale(id: number){
    const result = prisma.sales.delete({
        where: {
            id: id
        }
    })
}

const saleRepository = {
    getAll,
    addSale,
    getRank,
    addStock,
    updateStock,
    cancelSale
}

export default saleRepository;