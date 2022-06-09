import beeLineIcon from '../images/bee-line-icon@2x.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { currentFarmer } from "./atoms"
import useAxios, { configure } from 'axios-hooks'
import { useSetRecoilState } from 'recoil'
import Axios from 'axios'
import LRU from 'lru-cache'
var _ = require('lodash')
const backButton = <FontAwesomeIcon icon={faArrowLeft} />
const filterButton = <FontAwesomeIcon icon={faFilter} />

export default function Results() { 
    const setCurrentFarmer = useSetRecoilState(currentFarmer)

    let farmer1Name
    let farmer1Desc 
    let farmer1Profile
    let farmer2Name
    let farmer2Desc 
    let farmer2Profile
    let farmer3Name
    let farmer3Desc 
    let farmer3Profile
    
    const axios = Axios.create({
        baseURL: 'https://beefriends-development-default-rtdb.firebaseio.com/',
      })
    
      const cache = new LRU({ max: 10 })
      configure({ axios, cache })
      
    
        const [{ data: getData, loading: getLoading, error: getError }] = useAxios('beekeepers.json')
        if (getLoading) return <p>Loading...</p>
        if (getError) return <p>Error!</p>
        if (getData) {
          fetchData()
        }
    
        function fetchData() {
          var farmerData = getData  
          farmer1Name =  _.startCase(_.toLower(farmerData[0].name));
          farmer1Desc = farmerData[0].description
          farmer1Profile = farmerData[0].profileName
          farmer2Name =   _.startCase(_.toLower(farmerData[1].name));
          farmer2Desc = farmerData[1].description
          farmer2Profile = farmerData[1].profileName
          farmer3Name =   _.startCase(_.toLower(farmerData[2].name));
          farmer3Desc = farmerData[2].description
          farmer3Profile = farmerData[2].profileName
          console.log("fetching")
        //   console.log(farmer1Name)
        }




    // const currentFarmerValue = useRecoilValue(currentFarmer)
    // console.log(currentFarmerValue)

    function ChangeFarmer(prop) {
        let farmerProp = prop
        setCurrentFarmer(farmerProp)
        // console.log(farmerProp)
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
                                    <h2 className='beekeeper-name' onClick={() => ChangeFarmer(farmer1Profile)}>{farmer1Name}</h2>
                                </Link>
                                <p className='intro'>{farmer1Desc}</p>
                            </div>
                    </div>
                    <div className='result-wrapper'>
                        <div className='avatar'></div>
                        <div className='result'>
                            <p className='distance'>18 mi.</p>
                            <Link to={'/profile'}>
                                <h2 className='beekeeper-name' onClick={() => ChangeFarmer(farmer2Profile)}>{farmer2Name}</h2>
                            </Link>
                            <p className='intro'>{farmer2Desc}</p>
                        </div>
                    </div>
                    <div className='result-wrapper'>
                        <div className='avatar'></div>
                        <div className='result'>
                            <p className='distance'>27 mi.</p>
                            <Link to={'/profile'}>
                                <h2 className='beekeeper-name' onClick={() => ChangeFarmer(farmer3Profile)}>{farmer3Name}</h2>
                            </Link>
                            <p className='intro'>{farmer3Desc} </p>
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