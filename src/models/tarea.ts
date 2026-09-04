import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true,
            trim: true
        },
        completo: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
);

export const Tarea = mongoose.model("Tarea", tareaSchema);