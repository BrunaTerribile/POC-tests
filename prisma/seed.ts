import {prisma} from "../src/database/database.js";

async function main() {
    await prisma.pedals.createMany({
        data: [
        {
            "model": "HX Stomp",
            "brand": "Line 6",
            "value": 300
        },
        {
            "model": "Morning Glory V4",
            "brand": "JHS Pedals",
            "value": 200
        },
        {
            "model": "Reverb RV-500",
            "brand": "Boss",
            "value": 400
        },
        {
            "model": "Big Sky",
            "brand": "Strymon",
            "value": 600
        },
        {
            "model": "Tube Screamer TS-9",
            "brand": "Ibanez",
            "value": 150
        },
        {
            "model": "Cry Baby GBC-95",
            "brand": "Dunlop",
            "value": 100
        }
        ]
    })
    await prisma.stock.createMany({
        data: [
            {
                "pedal_id": 1,
                "quantity": 10
            },
            {
                "pedal_id": 2,
                "quantity": 12
            },
            {
                "pedal_id": 3,
                "quantity": 20
            },
            {
                "pedal_id": 4,
                "quantity": 15
            },
            {
                "pedal_id": 5,
                "quantity": 10
            },
            {
                "pedal_id": 6,
                "quantity": 12
            }
        ]
    })
    await prisma.sales.createMany({
        data: [
            {
                "pedal_id": 1,
                "customer": "Bruno Silva"
            },
            {
                "pedal_id": 2,
                "customer": "João Camargo"
            },
            {
                "pedal_id": 3,
                "customer": "Pedro Alcântara"
            },
            {
                "pedal_id": 1,
                "customer": "Pedro Alcântara"
            },
            {
                "pedal_id": 1,
                "customer": "Mateus Asato"
            }
        ]
    })
}

main()
    .then(()=> {console.log("Registro feito com sucesso!")})
    .catch(e => {
        console.error(e);
        process.exit(1)
    })
    .finally(async () => {
        prisma.$disconnect();
    })