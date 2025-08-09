import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface LikeProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    width: number;
    height: number;
    liked: boolean;

    updateLike: (newLike: boolean) =>  void;
}