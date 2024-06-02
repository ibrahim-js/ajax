import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "https://super-duper-barnacle-gww5qqjjg7qh95jj-5500.app.github.dev",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions)); // Preflight requests

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/matches", (req, res) => {
    const matches = [
        { name: "RMA vs FCB", score: "3-1" },
        { name: "BVB vs AJX", score: "2-1" },
    ];

    res.json(matches);
});

app.listen(3000, () => console.log("Server is running..."));
