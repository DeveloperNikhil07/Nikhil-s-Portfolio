import React, { Suspense } from 'react'
import WindowLoader from './Component/WindowLoader/WindowLoader'
import HomeBanner from './Component/HomeBanner/HomeBanner'

export default function page() {
  return (
    <Suspense fallback={<WindowLoader />}>
      <HomeBanner />
    </Suspense>
  )
}
