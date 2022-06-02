import { useState } from 'react'
import classNames from 'classnames'
import RatingStar from './RatingStar'
import { clamp } from '../../utils/number'
import { mapLength } from '../utilities/arrayUtils'
import './Rating.scss'

const MAX_STAR_RATING = 5
const UNHOVERED_INDEX = -1
const FULL_STAR_PERCENT = 100
const EMPTY_STAR_PERCENT = 0
const PARTIAL_STAR_INCREMENTS = 4
const RATING_DECIMAL_DIGIT_LENGTH = 2

const Rating = ({
  className,
  errorMessage,
  label,
  maxRating,
  onRatingChange,
  totalReviewers,
  value,
  ...props
}: Props) => {
  const ratingClassName = classNames('Rating', className)
  const starContainerClassName = classNames('Rating__starsContainer', {
    'Rating__starsContainer--summary': totalReviewers,
    'Rating__starsContainer--ratingChange': onRatingChange,
  })
  const [hoveredIndex, setHoveredIndex] = useState(UNHOVERED_INDEX)
  const valueNum = value || 0

  const getStarPercent = (index: number) => {
    const valueUpByQuarter =
      Math.ceil(PARTIAL_STAR_INCREMENTS * valueNum) / PARTIAL_STAR_INCREMENTS
    const fractionValue =
      Number(
        valueUpByQuarter.toFixed(RATING_DECIMAL_DIGIT_LENGTH).split('.')[1],
      ) || EMPTY_STAR_PERCENT
    if (fractionValue && index === Math.trunc(valueNum)) {
      return fractionValue
    } else if (valueUpByQuarter > index) {
      return FULL_STAR_PERCENT
    } else {
      return EMPTY_STAR_PERCENT
    }
  }

  const getRenderedPercent = (starIndex: number) => {
    if (hoveredIndex === UNHOVERED_INDEX) {
      return getStarPercent(starIndex)
    } else if (hoveredIndex >= starIndex) {
      return FULL_STAR_PERCENT
    } else {
      return EMPTY_STAR_PERCENT
    }
  }

  const ratingClamp = clamp(valueNum, 0, maxRating)
  const formattedRating = ratingClamp.toFixed(1)
  const summaryLabel = `${formattedRating} out of ${maxRating} stars`
  const ratingSummaryElem = totalReviewers ? (
    <span className="Rating__summary">
      {formattedRating} based on
      {totalReviewers}
    </span>
  ) : null

  const labelElem = label ? (
    <label className="Rating__label">{label}</label>
  ) : null

  const errorMessageElem = errorMessage ? (
    <div className="Rating__errorMessage" role="alert">
      {errorMessage}
    </div>
  ) : null

  const renderStars = () => {
    return mapLength(maxRating, (index: number) => {
      return (
        <RatingStar
          fillPercent={getRenderedPercent(index)}
          key={`star-${index}`}
          onClick={() => onRatingChange && onRatingChange(index + 1)}
          onMouseEnter={() => onRatingChange && setHoveredIndex(index)}
          onMouseLeave={() =>
            onRatingChange && setHoveredIndex(UNHOVERED_INDEX)
          }
        />
      )
    })
  }

  return (
    <div
      aria-label={summaryLabel}
      className={ratingClassName}
      data-testid="Rating"
      title={summaryLabel}
      {...props}
    >
      {labelElem}
      <div className="Rating__container">
        <div className={starContainerClassName}>{renderStars()}</div>
        {ratingSummaryElem}
      </div>
      {errorMessageElem}
    </div>
  )
}

const defaultProps = {
  maxRating: MAX_STAR_RATING,
}

type Props = {
  value: number
  className?: string
  errorMessage?: string
  label?: any
  maxRating?: number
  onRatingChange?: (_starRating: number) => void
  totalReviewers?: number
} & typeof defaultProps

Rating.defaultProps = defaultProps

export default Rating
