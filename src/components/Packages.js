import React, { useEffect, useState } from 'react'

import first from './Images/first.jpeg'
import sec from  './Images/two.jpeg'
import third from  './Images/three.jpeg'
import four from  './Images/four.jpeg'
function Packages() {
    const image = [
        first,
        sec,
        third,
        four,
        
    ]
    const [value, setValue] = useState(0);
    var divStyle = {
        backgroundImage: 'url(' + image[value] + ')'
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(() => ((value === 5 ? 0 : value + 1)));
        }, 6000);
        return () => clearInterval(interval);
    }, [value])
    return (
        <>
            <div  className="m-10  lg:m-48 rounded-xl md: h-[30vw] md:h-[78vh]  max-h-[800px] transition-all duration-75 bg-cover bg-center" style={divStyle}>
                <div className="bg-gradient-to-b from-accent to-transparent h-full w-full">
                    <div className="flex flex-col items-center justify-center container" style={{ height: "100%" }}>
                        <div className="flex flex-col gap-10">
                            <h2 className="text-white text-5xl text-center">
                                <span className="font-bold">AgriVision4U</span> Welcomes U
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Packages


