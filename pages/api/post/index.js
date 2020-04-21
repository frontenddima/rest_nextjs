import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const { title, content, authorEmail } = req.body
    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            User: {connect: {email: authorEmail}}
        }
    })
    res.json(result)
}