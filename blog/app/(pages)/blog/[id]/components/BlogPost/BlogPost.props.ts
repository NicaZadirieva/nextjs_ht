import { BlogItemResponse } from '@/app/api/helpers';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogPostProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    blogPostData: BlogItemResponse;
}