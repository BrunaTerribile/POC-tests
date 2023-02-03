import { PedalInput } from "../protocols/pedal.js";
import { prisma } from "../database/database.js";

async function getAll(){
    const data = prisma.pedals.findMany()
    return data;
}

async function getById(id: number){
    const data = prisma.pedals.findUnique({
        where: { id: id }
    })
    return data;
}

async function addPedal(pedal: PedalInput){
    await prisma.pedals.create({
        data: {
            model: pedal.model,
            brand: pedal.brand,
            value: pedal.value
        }
    })

    const data = await prisma.pedals.findMany({ orderBy: { id: 'desc' } });
    return data[0];
}

const pedalRepository = {
    getAll,
    getById,
    addPedal
}

export default pedalRepository;