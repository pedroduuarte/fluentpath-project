import sqlite3 from "sqlite3"
import { open } from "sqlite"

const dbPromise = open(
    {
        filename: './Database/users.db',
        driver: sqlite3.Database
    },
    {
        filename: './Database/posts.db',
        driver: sqlite3.Database
    }
)

export const db = await dbPromise;