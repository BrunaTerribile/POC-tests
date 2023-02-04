import supertest from "supertest";
import server from "../src/app"
import { Pedal } from "../src/protocols/pedal";


describe("pedals", () => {
    it("get all pedals but there is nothing", async () => {
        const result = await supertest(server).get("/pedals");
        const { status } = result;

        expect(status).toBe(200);

        const fruits = result.body as Pedal[];
        expect(fruits).toHaveLength(0);
    })

    // it("insert a pedal", async () => {
    //     const body:PedalInput = {
    //             model: string,
    //             brand: string,
    //             value: number,
    //             quantity: number
    //     }

    //     const result = await supertest(server).post("/pedals").send(body);
    //     const { status } = result;
    //     expect(status).toBe(201);
    // });


    // it("get a pedal", async () => {
    //     const result = await supertest(server).get("/pedals/1");
    //     const { status } = result;

    //     expect(status).toBe(200);

    //     const body = result.body as Pedal;

    //     expect(body).toEqual({
    //             id: number,
                // model: string,
                // brand: string,
                // value: number,
    //     })
    // });

    // it("get all pedals", async () => {
    //     const result = await supertest(server).get("/pedals");
    //     const { status } = result;

    //     expect(status).toBe(200);

    //     const fruits = result.body as Pedal[];
    //     expect(fruits).toHaveLength(1);
    //     expect(fruits).toEqual(expect.arrayContaining([
    //         expect.objectContaining({
    //             id: expect.any(Number),
    //             name: expect.any(String),
    //             price: expect.any(Number)
    //         })

    //     ]));
    // })

    // it("tries to get a pedal that does not exist", async () => {
    //     const result = await supertest(server).get("/pedals/102382733");
    //     const { status } = result;

    //     expect(status).toBe(404);
    // })

    // it("tries to insert a pedal with missing data", async () => {
    //     type IncompletePedal = Omit<PedalInput, "model">
        
    //     const body:IncompleteFruit = {
    //         brand: "Banana",
    //         value: 500
    //     } //missing on purpose

    //     const result = await supertest(server).post("/pedals").send(body);
    //     const { status } = result;
    //     expect(status).toBe(422);
    // })

    // it("tries to insert a pedal that is already registered", async () => {
    //     const body: PedalInput = {
    //             model: string,
    //             brand: string,
    //             value: number,
    //             quantity: number
    //     }

    //     const result = await supertest(server).post("/pedals").send(body);
    //     const { status } = result;
    //     expect(status).toBe(409);
    // })
});