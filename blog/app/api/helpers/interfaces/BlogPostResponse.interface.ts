import { BlogItemResponse } from './BlogItemResponse.interface';

/**Тип для всех постов */
export interface BlogPostResponse {
    blogItems: BlogItemResponse[];
}