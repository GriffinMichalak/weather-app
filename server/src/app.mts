import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import chalk from 'chalk';
// import dotenv from 'dotenv';
// dotenv.config();
import cors from 'cors';
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5001;

// 💻 configure server
const app = express();

// 🖕 middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 📐 serve angular app
app.use(express.static(path.join(__dirname, '..', 'angular')));
app.all('/*', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'angular')});
});
// 💻 -----------------------------

app.listen(PORT, () => {
    console.log(chalk.bold.cyan(`✌️ Server is listening on port ${PORT}.`)); // 
});