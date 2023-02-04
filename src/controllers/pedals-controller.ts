import { Request, Response } from "express";
import { PedalInput } from "../protocols/pedal";
import pedalService from "../services/pedal-service";

async function getPedals(req: Request, res: Response){
    const pedals = await pedalService.getAllPedals()
    res.status(200).send(pedals)
}

async function getOne(req: Request, res: Response){
    const id = parseInt(req.params.id)

    const pedal = await pedalService.getOnePedal(id)
    res.status(200).send(pedal)
}

async function postPedal(req: Request, res: Response){
    const newPedal = req.body as PedalInput
    const { quantity } = req.body

    await pedalService.createPedal(newPedal, quantity)
    res.status(201).send(`Pedal inserted`)
}

export {
    getPedals,
    getOne,
    postPedal
}