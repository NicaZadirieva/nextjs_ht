import { BlogItemResponse } from '@/app/api/helpers';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    blogItems: BlogItemResponse[]
}