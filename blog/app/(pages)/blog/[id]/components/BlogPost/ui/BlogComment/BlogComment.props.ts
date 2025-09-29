import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogCommentProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    commentAuthor: string;
    emailAuthor: string;
    commentBody: string;
}