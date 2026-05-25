import {Metadata} from "next";
import {getMoviesByGenre, getGenres} from "@/services/api.service";
import {MoviesListCard} from "@/components/movies-list-card/MoviesListCard";
import {IGenre} from "@/models/IGenre";
import styles from "./GenrePage.module.css";

type Props = { params: Promise<{ id: string }> }

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    const genres: IGenre[] = await getGenres();
    const name = genres.find((g) => g.id === Number(id))?.name ?? 'Genre';
    return {
        title: `${name} — MOVA`,
        description: `Browse movies in the ${name} genre.`,
    };
}

const GenrePage = async ({params}: Props) => {
    const {id} = await params;
    const [movieData, genres]: [{ results: Parameters<typeof MoviesListCard>[0]['movie'][] }, IGenre[]] =
        await Promise.all([getMoviesByGenre(id), getGenres()]);

    const genreName = genres.find((g) => g.id === Number(id))?.name ?? '';

    return (
        <div>
            <h1 className={styles.heading}>{genreName}</h1>
            <div className={styles.grid}>
                {movieData.results?.map((movie) => (
                    <MoviesListCard key={movie.id} movie={movie} genres={genres}/>
                ))}
            </div>
        </div>
    );
}

export default GenrePage;
