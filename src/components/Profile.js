import React from 'react'
import { Link } from 'react-router-dom'
import beeLineIcon from '../images/bee-line-icon@2x.png'
import headerAvatar from '../images/header-avatar@2x.png'
import honeycombPattern from '../images/honeycomb-pattern@2x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const backButton = <FontAwesomeIcon icon={faArrowLeft} />

export default function Profile() {
  return (
      <>
        <div className='profile-wrapper'>        
            <div className='profile-header'>
                <Link to={'/results'} className='back-link'><div className='back-button'>{backButton}</div></Link>
            </div>

            <div className='profile-content'>
                <div className='header-image' style={{ backgroundImage: {honeycombPattern} }}>
                    <div className='header-avatar'>
                        <img src={headerAvatar} alt="avatar" className='header-avatar' width="147" height="auto"></img>
                    </div>
                    <div className='honeycomb-pattern'>
                      {/* <img src={honeycombPattern} alt="honeycomb" width="596" height="auto"></img> */}
                    </div>
                </div>

                <div className='profile-content-block'>
                  <h2>Profile Name</h2>
                  <p>12mi.</p>

                  <p>Lorem ipsum sit ametorem ipsum sit sdsdfsg ipsum sit dffgfh ipsum sit amet.</p>
                </div>

                <div className='bee-line-break'>
                    <img src={beeLineIcon} alt="bee-line" height="32" width="auto" className='bee-line-icon'></img>
                </div>

                <div className='offerings-block'>
                  <div className='offering-wrapper'>
                    <div className='offering-icon'></div>
                    <div className='offering-title'>Local Honey</div>
                  </div>

                  <div className='offering-wrapper'>
                    <div className='offering-icon'></div>
                    <div className='offering-title'>Pollination Services</div>
                  </div>

                  <div className='offering-wrapper'>
                    <div className='offering-icon'></div>
                    <div className='offering-title'>Nucleus Colonies</div>
                  </div>

                  <div className='offering-wrapper'>
                    <div className='offering-icon'></div>
                    <div className='offering-title'>Hive Rental</div>
                  </div>
                </div>

                <div className='bee-line-break'>
                  <img src={beeLineIcon} alt="bee-line" height="32" width="auto" className='bee-line-icon'></img>
                </div>

                <div className='url-phone-social-block'>
                  <div className='url'>beejuiceapiaries.com</div>
                  <div className='phone'>555-123-4567</div>
                  <div className='social-wrapper'>
                    <div className='fb social-icon'>fb</div>
                    <div className='ig social-icon'>ig</div>
                    <div className='twitter social-icon'>tw</div>
                    <div className='email social-icon'>em</div>
                  </div>
                </div>

                <div className='image-gallery'>
                  <div className='image-1 gallery-img'></div>
                  <div className='image-2 gallery-img'></div>
                  <div className='image-3 gallery-img'></div>
                  <div className='image-4 gallery-img'></div>
                  <div className='image-5 gallery-img'></div>
                  <div className='image-6 gallery-img'></div>
                </div>
            </div>
          </div>
      </>
  )
}
