import React from 'react'
import beeIcon from '../images/bee-icon.png'
import LocateButton from './LocateButton'

export default function Home() {
  return (
    <div className='home-content-wrapper'>
        <div className='logo-wrapper'>
            <div className='logo'>
                <img src={beeIcon} alt="Logo" className='bee-icon' width="195" height="auto"></img>
            </div>
            <div className='taglines'>
                <div className='tag-wrapper'>
                    <h3 className='tagline'>Find Local Beekeepers</h3>
                </div>
                <div className='tag-wrapper'>
                    <h3 className='tagline'>Try Local Honey</h3>
                </div>
                <div className='tag-wrapper'>
                    <h3 className='tagline'>Help Save the Bees</h3>
                </div>
            </div>
      </div>

      <div className='locate-card'>
         <LocateButton></LocateButton>
      </div>
    </div>
  )
}
