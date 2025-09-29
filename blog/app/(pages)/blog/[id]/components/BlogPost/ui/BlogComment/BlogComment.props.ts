import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogCommentProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    authorId: number;
    commentBody: string;
}