import React from 'react';
import './HomePage.css'
import HpcFirst from './HpcFirst';
import HpcParallaxFirst from './HpcParallaxFirst';
import HpcSecond from './HpcSecond';
export default function HomePage() {
    return (
        <>
            <div className="flex flex-col flex-none w-screen">
                <HpcParallaxFirst/>
                <HpcFirst />
                <HpcSecond />
            </div>
        </>
    );
}

