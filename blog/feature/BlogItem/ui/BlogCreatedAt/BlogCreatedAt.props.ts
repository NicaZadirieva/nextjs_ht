import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogCreatedAtProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    createdAt: Date;
}