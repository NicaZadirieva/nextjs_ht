'use client'
import cn from 'classnames';
import { JSX, KeyboardEvent, useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star-icon.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ ratingArray, setRatingArray ] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
			<span key={i}
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isEditable
				})}
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => onClick(i + 1)}
			>		
				<StarIcon 
					onKeyDown={(e: KeyboardEvent<SVGElement>) => {
						isEditable && handleSpace(i + 1, e);
					}}
					tabIndex={isEditable ? 0 : -1}
				/>
			</span>);
		});
		setRatingArray(updatedArray);
	}

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	}
	const changeDisplay = (i: number) => {
		if (isEditable) {
			constructRating(i);
		}
	}

	const onClick = (rating: number) => {
		if (!isEditable || !rating || !setRating) {
			return;
		}
		setRating(rating);
	}
	
	return (
		<div {...props}>{ratingArray.map((r, i) => <span key={i}>{r}</span>)}</div>
	);
};