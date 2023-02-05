import { Request, Response } from "express";
import { PedalInput } from "../protocols/pedal";
import pedalService from "../services/pedal-service";

async function getPedals(req: Request, res: Response){
    const pedals = await pedalService.getAllPedals()
    res.status(200).send(pedals)
}

async function getOne(req: Request, res: Response){
    const id = parseInt(req.params.id)

    try {
        const pedal = await pedalService.getOnePedal(id)
        res.status(200).send(pedal)
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

async function postPedal(req: Request, res: Response){
    const newPedal = req.body as PedalInput
    const { quantity } = req.body

    try {
        pedalService.createPedal(newPedal, quantity)
        res.status(201).send(`Pedal inserted`)
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

export {
    getPedals,
    getOne,
    postPedal
}