import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogPostProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    blogId: number;
}