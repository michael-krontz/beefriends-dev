import beeLineIcon from '../images/bee-line-icon@2x.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
const backButton = <FontAwesomeIcon icon={faArrowLeft} />
const filterButton = <FontAwesomeIcon icon={faFilter} />

export default function Results() {
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
                            <Link to={'/profile'}>
                                <h2 className='beekeeper-name'>Bob's Bee's</h2>
                            </Link>
                            <p className='distance'>9 mi.</p>
                            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                </div>
                <div className='result-wrapper'>
                    <div className='avatar'></div>
                    <div className='result'>
                        <h2 className='beekeeper-name'>Fred's Bee's</h2>
                        <p className='distance'>18 mi.</p>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
                <div className='result-wrapper'>
                    <div className='avatar'></div>
                    <div className='result'>
                        <h2 className='beekeeper-name'>Joe's Bee's</h2>
                        <p className='distance'>27 mi.</p>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
            </div>
            <div className='bee-line-break'>
                <img src={beeLineIcon} alt="bee-line" height="32" width="auto" className='bee-line-icon'></img>
            </div>
        </div>
      </>
  )
}
