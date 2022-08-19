import React, { useEffect, useRef } from 'react'

function Subjects({search}) {
    const list = [
        {
            name: 'Rahul Thapliyal',
            imgurl: 'https://images.theconversation.com/files/49135/original/22qc7r28-1400667334.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=429&fit=crop&dpr=1',
            Companyname: 'MicroSoft',
            packages: '43.3',
            duration: '2016-20'
        }, {
            name: 'Taranjeet Kaur',
            imgurl: 'https://images.theconversation.com/files/49135/original/22qc7r28-1400667334.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=429&fit=crop&dpr=1',
            Companyname: 'Adobe',
            packages: '43.17',
            duration: '2016-20'
        // }, {
        //     name: 'Riya Verma',
        //     imgurl: top3,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }, {
        //     name: 'Himakshi Salhotra',
        //     imgurl: top4,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }, {
        //     name: 'Rahul Thapliyal',
        //     imgurl: Rahul,
        //     Companyname: 'MicroSoft',
        //     packages: '43.3',
        //     duration: '2016-20'
        // }, {
        //     name: 'Taranjeet Kaur',
        //     imgurl: top2,
        //     Companyname: 'Adobe',
        //     packages: '43.17',
        //     duration: '2016-20'
        // }, {
        //     name: 'Riya Verma',
        //     imgurl: top3,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }, {
        //     name: 'Himakshi Salhotra',
        //     imgurl: top4,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }, {
        //     name: 'Rahul Thapliyal',
        //     imgurl: Rahul,
        //     Companyname: 'MicroSoft',
        //     packages: '43.3',
        //     duration: '2016-20'
        // }, {
        //     name: 'Taranjeet Kaur',
        //     imgurl: top2,
        //     Companyname: 'Adobe',
        //     packages: '43.17',
        //     duration: '2016-20'
        // }, {
        //     name: 'Riya Verma',
        //     imgurl: top3,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }, {
        //     name: 'Himakshi Salhotra',
        //     imgurl: top4,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }, {
        //     name: 'Rahul Thapliyal',
        //     imgurl: Rahul,
        //     Companyname: 'MicroSoft',
        //     packages: '43.3',
        //     duration: '2016-20'
        // }, {
        //     name: 'Taranjeet Kaur',
        //     imgurl: top2,
        //     Companyname: 'Adobe',
        //     packages: '43.17',
        //     duration: '2016-20'
        // }, {
        //     name: 'Riya Verma',
        //     imgurl: top3,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }, {
        //     name: 'Himakshi Salhotra',
        //     imgurl: top4,
        //     Companyname: 'Adobe',
        //     packages: '40',
        //     duration: '2015-19'
        // }
        }
    ]
    var count = 0;
    const myref = useRef();
    const handlecount = (val) => {
        count = val;
        return 1;
    }
    const isEqual = (itemE, searchV) => {
        itemE = itemE.toUpperCase();
        searchV = searchV.toUpperCase();
        console.log(searchV, itemE);
        if (!isNaN(searchV) && itemE.indexOf('-') === -1) {
            return parseInt(itemE) >= parseInt(searchV);
        }
        let value = itemE.indexOf(searchV);
        if (value !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {
                list.map((item, i) => {
                    return search ? ((isEqual(item.packages, search) || isEqual(item.duration, search) || isEqual(item.Companyname, search)) ? (handlecount(1)) && (
                        <div ref={myref} key={i} role="listitem" className="min-w-[260px] max-w-[400px] relative mt-32 mx-2">
                            <div className="rounded border-2 overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 border-2 shadow-md shadow-blue-500 rounded-full">
                                        <img src={item.imgurl} alt="..." className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16 flex flex-col items-center justify-center">
                                    <h1 className="font-semibold text-2xl text-center mb-1">{item.name}</h1>
                                    <p className="text-gray-800 font-medium text-lg text-center">{item.Companyname}</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="/" className="mx-5">
                                            <div aria-label="Github" role="img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="/" className="mx-5">
                                            <div aria-label="Twitter" role="img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="/" className="mx-5">
                                            <div aria-label="Instagram" role="img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <></>) : (handlecount(0)) &&
                    (
                        <div ref={myref} key={i} role="listitem" className="min-w-[280px] max-w-[400px] relative mt-24 mx-2">
                            <div className="rounded border-2 overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 border-2 shadow-md shadow-blue-500 rounded-full">
                                        <img src={item.imgurl} alt="Display Picture of Charles Keith" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16 flex flex-col items-center justify-center">
                                    <h1 className="font-semibold text-2xl text-center mb-1">{item.name}</h1>
                                    <p className="text-gray-800 font-medium text-lg text-center">{item.Companyname}</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="/" className="mx-5">
                                            <div aria-label="Github" role="img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="/" className="mx-5">
                                            <div aria-label="Twitter" role="img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="/" className="mx-5">
                                            <div aria-label="Instagram" role="img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                count === 0 && search ?
                    <div className='mb-4 flex w-full items-center justify-center'>
                        <div className='w-[75%] sm:w-full m-2  h-[21rem] flex items-center justify-center'>
                            <div className='card border h-full border-white text-gray-700 rounded-lg flex flex-col items-center text-2xl font-semibold italic justify-center'>
                                {/* <img src={searchgif} alt='...' /> */}
                                <span className='my-10 italic'>No Pages Found!</span>
                            </div>
                        </div>
                    </div> : <></>
            }
        </>
    )
}

export default Subjects