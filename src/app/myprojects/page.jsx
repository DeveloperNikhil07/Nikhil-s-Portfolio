import React, { Suspense } from 'react'
import WindowLoader from '../Component/WindowLoader/WindowLoader'
import OurProjects from '../Component/OurProjects/OurProjects'

export default function page() {
    return (
        <Suspense fallback={<WindowLoader />}>
            <OurProjects />
        </Suspense>
    )
}
