import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Subjects({search}) {
    let navigate = useNavigate();
    const list = [
        {
            name: 'Mathematics',
            imgurl: 'https://assets.mica.edu/files/resources/ultrawide-xsml-mica_pattern_organic.jpg',
            
        },  {
            name: 'Chemistry',
            imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4rd86mHf5ZrF0OQTjeSH4JT2V076OI5JFg&usqp=CAU',
         
        }, {
            name: 'Physics',
            imgurl: 'https://media.istockphoto.com/vectors/vector-abstract-geometric-golden-background-art-deco-wedding-party-vector-id1356531998?b=1&k=20&m=1356531998&s=612x612&w=0&h=TuK9y2VWZwJ0QuhE36zvqj10IVh6PuKQjGNA4RiY8TM=',
        },
        {
            name: 'Mathematics',
            imgurl: 'https://assets.mica.edu/files/resources/ultrawide-xsml-mica_pattern_organic.jpg',
            
        },  {
            name: 'Chemistry',
            imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4rd86mHf5ZrF0OQTjeSH4JT2V076OI5JFg&usqp=CAU',
         
        }, {
            name: 'Physics',
            imgurl: 'https://media.istockphoto.com/vectors/vector-abstract-geometric-golden-background-art-deco-wedding-party-vector-id1356531998?b=1&k=20&m=1356531998&s=612x612&w=0&h=TuK9y2VWZwJ0QuhE36zvqj10IVh6PuKQjGNA4RiY8TM=',
        },
        {
            name: 'Mathematics',
            imgurl: 'https://assets.mica.edu/files/resources/ultrawide-xsml-mica_pattern_organic.jpg',
            
        },  {
            name: 'Chemistry',
            imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4rd86mHf5ZrF0OQTjeSH4JT2V076OI5JFg&usqp=CAU',
         
        }, {
            name: 'Physics',
            imgurl: 'https://media.istockphoto.com/vectors/vector-abstract-geometric-golden-background-art-deco-wedding-party-vector-id1356531998?b=1&k=20&m=1356531998&s=612x612&w=0&h=TuK9y2VWZwJ0QuhE36zvqj10IVh6PuKQjGNA4RiY8TM=',
        },
        {
            name: 'Mathematics',
            imgurl: 'https://assets.mica.edu/files/resources/ultrawide-xsml-mica_pattern_organic.jpg',
            
        },  {
            name: 'Chemistry',
            imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4rd86mHf5ZrF0OQTjeSH4JT2V076OI5JFg&usqp=CAU',
         
        }, {
            name: 'Physics',
            imgurl: 'https://media.istockphoto.com/vectors/vector-abstract-geometric-golden-background-art-deco-wedding-party-vector-id1356531998?b=1&k=20&m=1356531998&s=612x612&w=0&h=TuK9y2VWZwJ0QuhE36zvqj10IVh6PuKQjGNA4RiY8TM=',
        }
        
      
    ]
   

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {
                list.map((item, i) => {
                    return  ( 
                        <div  key={i} role="listitem" className="min-w-[260px] max-w-[400px] relative mt-32 mx-2">
                           <div className="rounded border-2 overflow-hidden shadow-md bg-white " onClick={() => { navigate("/Questions")}}>
                           <div className="  absolute -mt-20 w-full flex justify-center  h-36">
                           <img src={item.imgurl} alt="Display Picture of Charles Keith" role="img" className=" object-cover h-full w-full shadow-md" />
                           </div>
                                   
                            
                                <div className="px-6 mt-16 flex flex-col items-center justify-center">
                                    <h1 className="font-semibold text-2xl text-center mb-1">{item.name}</h1>      
                                </div>
                            </div>
                        </div>
                    )
                })}
                </>)
}
                export default Subjects
                
                

