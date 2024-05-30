import React from 'react'

const Result = (props) => {
  const boxes=props.movies.map(
    (item,index)=>{
      return <Box key={index} image={item.poster_path} title={item.
        original_title} rating={item.vote_average} paragraph={item.overview}/>
    }
  )
  return (
    <div className="w-full grid md:grid-cols-5 gap-4">
           {boxes}
          </div>
  )
}

export default Result
const Box=(props)=>{
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return(
    <div className="shadow min-h-[200px] mt-3 pb-1 cursor-wait">
      <div>
      <img src={IMGPATH+ props.image} alt="" className='w-full'/>
      </div>
    
    
    <div className='flex justify-between px-2  items-center cursor-pointer'>
    <span className='text-2xl'>{props.title}</span>
    <span className='text-xl text-yellow-600'>{props.rating}</span>
    </div>
    </div>
  )
  }