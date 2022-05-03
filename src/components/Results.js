import beeLineIcon from '../images/bee-line-icon@2x.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { currentFarmer } from "./atoms"
import { useRecoilValue, useSetRecoilState } from 'recoil'
const backButton = <FontAwesomeIcon icon={faArrowLeft} />
const filterButton = <FontAwesomeIcon icon={faFilter} />

export default function Results() { 

    let farmer1 = 0
    let farmer2 = 1 
    let farmer3 = 2 

    const currentFarmerValue = useRecoilValue(currentFarmer)
    const setCurrentFarmer = useSetRecoilState(currentFarmer)
    console.log(currentFarmerValue)

    function ChangeFarmer(prop) {
        let farmerProp = prop
        setCurrentFarmer(farmerProp)
        console.log(farmerProp)
    }

  return (
      <>
        <div className='results-wrapper'>
            <div className='results-header'>
            <Link to={'/'} className='back-link'>
                <div className='back-button'>{backButton}</div>
            </Link>
                <div className='result-number'>3 Results</div>
                <div className='filter'>{filterButton}</div>
            </div>
                <div className='results'>
                    <div className='result-wrapper'>
                        <div className='avatar'></div>
                            <div className='result'>
                                <p className='distance'>9 mi.</p>
                                <Link to={'/profile'}>
                                    <h2 className='beekeeper-name' onClick={() => ChangeFarmer(farmer1)}>{farmer1}</h2>
                                </Link>
                                <p className='intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus mauris urna</p>
                            </div>
                    </div>
                    <div className='result-wrapper'>
                        <div className='avatar'></div>
                        <div className='result'>
                            <p className='distance'>18 mi.</p>
                            <Link to={'/profile'}>
                                <h2 className='beekeeper-name' onClick={() => ChangeFarmer(farmer2)}>{farmer2}</h2>
                            </Link>
                            <p className='intro'>Lorem ipsum dolor sit amet, cous mauris urna</p>
                        </div>
                    </div>
                    <div className='result-wrapper'>
                        <div className='avatar'></div>
                        <div className='result'>
                            <p className='distance'>27 mi.</p>
                            <Link to={'/profile'}>
                                <h2 className='beekeeper-name' onClick={() => ChangeFarmer(farmer3)}>{farmer3}</h2>
                            </Link>
                            <p className='intro'>Lorem ipsum dolor sit amet. Nullam maximus mauris urnaonsectetur adipiscing elit. </p>
                        </div>
                    </div>
                </div>
            <div className='bee-line-break'>
                <img src={beeLineIcon} alt="bee-line" height="32" width="auto" className='bee-line-icon'></img>
            </div>

            {/* <div className='basic-results'>
                <div className='basic-result-wrapper'>
                    <div className='basic-distance'>16 mi.</div>
                    <div className='basic-result'>Cheapo Farms Honey & Hives</div>
                    <div className='basic-result-content-wrapper'>
                        <div className='basic-website'>website</div>
                        <div className='basic-facebook'>fb</div>
                        <div className='basic-phone'>555-555-5555</div>
                    </div>
                </div>
            </div> */}
            <div className='copyright'>Copyright© 2022, BeeFriends LLC</div>
        </div>
      </>
  )
}