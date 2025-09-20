import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogLikeProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    likeCounter?: number;
}