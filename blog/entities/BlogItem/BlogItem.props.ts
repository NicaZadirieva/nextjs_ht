import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    text: string;
    likeCounter?: number;
    tag: string;
    createdAt: Date;
    title: string;
    readTime: string;
    postLink: string;
    mainPhotoLink: string; 
}