import React from 'react'
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
                <div className='back-button'>{backButton}</div>
                <div className='result-number'>3 Results</div>
                <div classname='filter'>{filterButton}</div>
            </div>

            <div className='results'>
                <h2>Bob's Bee's</h2>
                <h2>Fred's Bee's</h2>
                <h2>Joe's Bee's</h2>
            </div>
        </div>
      </>
  )
}
