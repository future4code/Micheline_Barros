import { Request, Response } from 'express';
import { SearchUserDB } from './../data/SearchUserDB';



export async function searchUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const searchEmail = req.params.email
        console.log(searchEmail)

        const db = new SearchUserDB();
        console.log("db", db)

        const search = await db.searchUserEmail(searchEmail);
        console.log("search",search)

        res.status(200).send(search)

    } catch (error) {
        res.status(500).send("Internal server error")
    }
}