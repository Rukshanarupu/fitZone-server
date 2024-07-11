/* eslint-disable no-console */
import app from "./app"
import mongoose from "mongoose";
import config from "./config";
import { Server } from "http";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
let server: Server;

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        server = app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

  

main();