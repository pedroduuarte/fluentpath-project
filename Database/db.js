import sqlite3 from "sqlite3";
import { open } from "sqlite";

const dbPromise = open(
    {
        filename: './Database/database.db',
        driver: sqlite3.Database
    }
)

    
export const db = await dbPromise;
