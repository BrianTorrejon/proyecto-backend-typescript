import { Tarea } from "../models/tarea.js";
import { Request, Response } from "express";

export const verTarea = async (req: Request, res: Response): Promise<void> => {
    try {
        const tarea = await Tarea.find();
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener tarea"
        });
    };
};