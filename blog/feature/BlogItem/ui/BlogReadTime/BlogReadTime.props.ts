import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogReadTimeProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    readTime: string;
}