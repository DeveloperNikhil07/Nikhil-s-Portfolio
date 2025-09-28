import React from 'react'
import SkeltonStructure from '../SkeltonLoader/SkeltonStructure'

export default function HomeBannerSkelton() {
  return (
    <>
      <div className='col-12 col-lg-6'>
        <div className='d-flex flex-column align-items-center align-items-lg-start' style={{ height: '100%' }}>
          <SkeltonStructure height='clamp(77px,10.4vw,180px)' width='100%' customClass="mb-lg-4 mb-3" />
          <SkeltonStructure height='clamp(152px,10.4vw,110px)' width='100%' customClass='' />
          <SkeltonStructure height='50px' width='175px' customClass='mt-4 mt-lg-5' />
        </div>
      </div>
      <div className='col-12 col-md-6'>
        <div className=''>
          <SkeltonStructure height='382px' width='100%' />
        </div>
      </div>
    </>
  )
}
