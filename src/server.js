"use strict";
// https://colorful-mine-d67.notion.site/Criando-projeto-com-TS-90e39763e4a84e5fb2be37811dc0ee5d
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (request, response) => {
    return response.json({ message: "Hello World!!!" });
});
app.listen(port, () => {
    console.log(` http://localhost:${port}`);
});
