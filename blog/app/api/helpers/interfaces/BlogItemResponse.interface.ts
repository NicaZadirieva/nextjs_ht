/** Тип одного блог-поста*/
export interface BlogItemResponse {
    title: string;
    content: string;
    id: number;
    slug: string;
    publishedAt: string;
    category: string;
    thumbnail: string;
    image: string;
}