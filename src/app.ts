import express from "express";
import cors from "cors";
import rutasTarea from "./routes/rutasTarea.js"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "API FUNCIONANDO"
    });
});

app.use("/api/tarea", rutasTarea);

export default app;