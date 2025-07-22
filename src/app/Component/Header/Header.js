"use client"
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
const GetImagesByUrl = process.env.NEXT_PUBLIC_IMAGE_UR;
import { useWebsiteContent } from '@/app/context/WbContent';
import HeaderNavSkelton from './HeaderNavSkelton';


export default function Header() {
    const { websiteData, loading } = useWebsiteContent();
    return (
        <>
            <header className='header'>
                <div className="header-wrapper">
                    <div className="container">
                        <div className="row header-row align-items-center">
                            {loading ? <><HeaderNavSkelton /></> : <>
                                <div className="col-7 col-sm-6 col-md-3">
                                    <div className="logo">
                                        <Link href={`/`} className='d-inline-block'>
                                            {/* <Image
                                            src={`${GetImagesByUrl}/assets/images/${websiteData?.dark_logo}`}
                                            alt="Logo"
                                            height={70}
                                            width={200}
                                            unoptimized={true}
                                        /> */}
                                            {websiteData?.header?.logoName}
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-5 col-sm-6 col-md-9'>
                                    <Navbar websiteData={websiteData} />
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
