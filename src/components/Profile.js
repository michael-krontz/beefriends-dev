import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import beeLineIcon from '../images/bee-line-icon@2x.png'
import headerAvatar from '../images/header-avatar@2x.png'
import honeycombPattern from '../images/honeycomb-pattern@2x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import useAxios, { configure } from 'axios-hooks'
import Axios from 'axios'
import LRU from 'lru-cache'
import { currentFarmer } from "./atoms"
import { useRecoilValue } from 'recoil'
var _ = require('lodash')
const backButton = <FontAwesomeIcon icon={faArrowLeft} />

export default function Profile() {

  const currentFarmerValue = useRecoilValue(currentFarmer)
  console.log(currentFarmerValue)

  let name
  let description
  let urlAddress
  let phone

  const axios = Axios.create({
    baseURL: 'https://beefriends-development-default-rtdb.firebaseio.com/',
  })

  const cache = new LRU({ max: 10 })
  configure({ axios, cache })
  

    const [{ data: getData, loading: getLoading, error: getError }] = useAxios('beekeepers/' + currentFarmerValue + '.json')
    if (getLoading) return <p>Loading...</p>
    if (getError) return <p>Error!</p>
    if (getData) {
      fetchData()
    }

    function fetchData() {
      var farmerData = getData  
      // farmerData = farmerData[0]
      name =  _.startCase(_.toLower(farmerData.name));
      description = farmerData.description
      urlAddress = farmerData.url
      phone = farmerData.phone
      console.log("fetching")
      console.log(farmerData)
    }

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
                  <h2 className='profile-name'>{name}</h2>
                  <p className='distance'>12mi.</p>

                  <p className='description'>{description}</p>
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

                <div className='products-wrapper'>
                  <div className='products'>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Select aria-label="">
                      <option>Available Products</option>
                      <option value="1">15oz - $12.99</option>
                      <option value="2">10oz - $7.99</option>
                      <option value="3">5oz - $2.99</option>
                    </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='interested-button'>
                      Add to Order
                    </Button>
                  </Form>
                  </div>
                </div>

                <div className='url-phone-social-block'>
                  <div className='url'>{urlAddress}</div>
                  <div className='phone'>{phone}</div>
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
