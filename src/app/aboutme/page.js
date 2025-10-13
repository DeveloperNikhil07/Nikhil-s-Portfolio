import React, { Suspense } from 'react'
import AboutUs from '../Component/AboutUsLayout/AboutUs'
import WindowLoader from '../Component/WindowLoader/WindowLoader'

export default function page() {
  return (
    <Suspense fallback={<WindowLoader />}>
      <AboutUs />
    </Suspense>
  )
}
