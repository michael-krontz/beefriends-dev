import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
const locationArrowIcon = <FontAwesomeIcon icon={faLocationArrow} />

export default function LocateButton() {
  return (
    <button className='locate-button'>
        <div className='icon'>
            {locationArrowIcon}
        </div>
    </button>
    )
}
