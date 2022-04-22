import React from 'react'
import beeIcon from '../images/bee-icon.png'
import LocateButton from './LocateButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const locationDot = <FontAwesomeIcon icon={faLocationDot} />

export default function Home() {
  return (
    <div className='home-content-wrapper'>
        <div className='logo-wrapper'>
            <div className='logo'>
                <img src={beeIcon} alt="Logo" className='bee-icon' width="225" height="auto"></img>
            </div>
      </div>

      <div className='locate-card'>
        <div className='taglines'>
            {/* <div className='location-icon'>{locationDot}</div> */}
            <div className='tag-wrapper'>
                <h3 className='tagline'>Find <strong>very</strong> local honey.</h3>
            </div>
        </div>
        <LocateButton></LocateButton>
      </div>
    </div>
  )
}
