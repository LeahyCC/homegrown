import React from 'react'
import uniqueId from '../utilities/uniqueId'

const STAR_ACTIVE_COLOR = '#FFD362'
const STAR_INACTIVE_COLOR = '#DEE0E8'

const RatingStar = ({ fillPercent, ...props }: props) => {
  const gradientId = uniqueId('star-gradient__')

  return (
    <svg
      fill="none"
      height="15"
      viewBox="0 0 16 15"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={`${fillPercent}%`} stopColor={STAR_ACTIVE_COLOR} />
          <stop offset={0} stopColor={STAR_INACTIVE_COLOR} />
        </linearGradient>
      </defs>
      <path
        clipRule="evenodd"
        d="M8 12.6317L3.29772 14.4721L3.595 9.43127L0.391548 5.52786L5.27756 4.25288L8 0L10.7224 4.25288L15.6085 5.52786L12.405 9.43127L12.7023 14.4721L8 12.6317Z"
        fill={`url(#${gradientId})`}
        fillRule="evenodd"
      />
    </svg>
  )
}

type props = {
  onClick(): void
  onMouseEnter(): void
  onMouseLeave(): void
  fillPercent: number
}

export default RatingStar
