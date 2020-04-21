import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const {id, name, email} = req.body
    const result = await prisma.user.findMany({
        where: {
            id: id,
            name: name,
            email: email,
        }
    })
    res.json(result)
}