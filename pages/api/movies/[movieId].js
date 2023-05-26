import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req, res);

        const { movieId } = req.query;

        if (typeof movieId !== 'string') {
            throw new Error('Invalid Id');
        }

        if (!movieId) {
            throw new Error('Missing Id');
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            },
        });

        return res.status(200).json(movie);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}
