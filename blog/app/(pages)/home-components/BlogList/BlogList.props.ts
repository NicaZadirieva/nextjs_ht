import { BlogItemResponse } from '@/app/api/helpers';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface BlogListProps extends Omit<DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref' > {
    blogItems: BlogItemResponse[]
}