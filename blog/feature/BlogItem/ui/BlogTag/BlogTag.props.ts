import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BlogTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    tag: string;
}