import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    text: string;
    likeCounter?: number;
    tag: string;
    createdAt: string;
    title: string;
    readTime: string;
    thumbnail: string; 
    slug: string;
    blogId: number;
}