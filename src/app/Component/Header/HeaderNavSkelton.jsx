import React from 'react'
import SkeltonStructure from '../SkeltonLoader/SkeltonStructure'

export default function HeaderNavSkelton() {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='logo'><SkeltonStructure height='30px' width='100px' /></div>
            <div className='d-none d-lg-block'>
                <div className='d-flex align-items-center' style={{ gap: '45px' }}>
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <SkeltonStructure key={idx} height="30px" width="100px" />
                    ))}
                </div>
            </div>
            <div className='d-lg-none'>
                <SkeltonStructure height="30px" width="30px" />
            </div>
        </div>
    )
}
