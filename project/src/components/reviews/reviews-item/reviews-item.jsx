import React from 'react';
import PropTypes from 'prop-types';

import { Rating } from '../../shared/rating/rating';

import { formatDateTime, formatDateReview } from '../../../utils/format';
import { propTypesReview } from '../../../types';

function ReviewsItem({ reviewData }) {
  const {
    comment,
    date,
    // id,
    rating,
    user: {
      avatarUrl,
      // id,
      // isPro,
      name,
    },
  } = reviewData;

  const dateTime = formatDateTime(date);
  const dateReview = formatDateReview(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating
          rating={rating}
          blockClassName={'reviews'}
        />

        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{dateReview}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  reviewData: PropTypes.shape(propTypesReview),
};

export { ReviewsItem };