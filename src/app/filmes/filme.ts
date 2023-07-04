export class Filme {
    id!: number;
    name!: string;
    imageUrl: string | undefined;
    rating: number = 0;
    comment: string | undefined;
}