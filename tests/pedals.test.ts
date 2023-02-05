import { prisma } from "../src/database/database";
import supertest from "supertest";
import server from "../src/app"
import { Pedal, PedalInput } from "../src/protocols/pedal";

beforeEach( async () => {
    await prisma.stock.deleteMany();
    await prisma.pedals.deleteMany();
})

describe("pedals", () => {
    it("get all pedals but there is nothing", async () => {
        const result = await supertest(server).get("/pedals");
        const { status } = result;

        expect(status).toBe(200);

        const fruits = result.body as Pedal[];
        expect(fruits).toHaveLength(0);
    })

    it("insert a pedal", async () => {
        const body:PedalInput = {
                model: "Kilt V2",
                brand: "JHS Pedals",
                value: 200,
                quantity: 10
        }

        const result = await supertest(server).post("/pedals").send(body);
        const { status } = result;
        expect(status).toBe(201);
    });


    it("get a pedal", async () => {
        await prisma.pedals.create({
            data: {
                id: 3000,
                model: "Kilt V2",
                brand: "JHS Pedals",
                value: 200
            }
        })
        
        const result = await supertest(server).get("/pedals/3000");
        const { status } = result;

        expect(status).toBe(200);

        const body = result.body as Pedal;

        expect(body).toEqual({
                id: 3000,
                model: "Kilt V2",
                brand: "JHS Pedals",
                value: 200
        })
    });

    it("get all pedals", async () => {
        await prisma.pedals.create({
            data: {
                id: 3000,
                model: "Kilt V2",
                brand: "JHS Pedals",
                value: 200
            }
        })
        
        const result = await supertest(server).get("/pedals");
        const { status } = result;

        expect(status).toBe(200);

        const fruits = result.body as Pedal[];
        expect(fruits).toHaveLength(1);
        expect(fruits).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                model: expect.any(String),
                brand: expect.any(String),
                value: expect.any(Number)
            })

        ]));
    })

    it("tries to get a pedal that does not exist", async () => {
        const result = await supertest(server).get("/pedals/102382733");
        const { status } = result;

        expect(status).toBe(404);
    })

    it("tries to insert a pedal with missing data", async () => {
        type IncompletePedal = Omit<PedalInput, "model">
        
        const body:IncompletePedal = {
            brand: "Boss",
            value: 500,
            quantity: 10
        } //missing on purpose

        const result = await supertest(server).post("/pedals").send(body);
        const { status } = result;
        expect(status).toBe(400);
    })

    it("tries to insert a pedal that is already registered", async () => {
        await prisma.pedals.create({
            data: {
                id: 3000,
                model: "Kilt V2",
                brand: "JHS Pedals",
                value: 200
            }
        })
        
        const body: Pedal = {
            id: 3000,
            model: "Kilt V2",
            brand: "JHS Pedals",
            value: 200
        }

        const result = await supertest(server).post("/pedals").send(body);
        const { status } = result;
        expect(status).toBe(400);
    })
});