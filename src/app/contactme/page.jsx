import React, { Suspense } from 'react'
import WindowLoader from '../Component/WindowLoader/WindowLoader'
import ConatctUs from '../Component/ConatctUs/ContactUs'

export default function page() {
    return (
        <Suspense fallback={<WindowLoader />}>
            <ConatctUs />
        </Suspense>
    )
}
