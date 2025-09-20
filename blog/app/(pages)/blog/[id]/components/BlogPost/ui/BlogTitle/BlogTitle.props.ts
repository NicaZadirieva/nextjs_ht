import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogTitleProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadingElement>,HTMLHeadingElement> {
    title: string;
}