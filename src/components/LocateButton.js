import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const locationArrowIcon = <FontAwesomeIcon icon={faLocationArrow} />

export default function LocateButton() {

    // function linkFunction() {
    //     <Redirect to="/results" />
    //     console.log('cock')
    // }

  return (
        <Link to="/results">
            <div className='locate-button'>
                <div className='icon'>
                    {locationArrowIcon}
                </div>
            </div>
        </Link>
    )
}
