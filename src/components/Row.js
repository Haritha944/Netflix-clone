import React ,{ useEffect,useState } from 'react';
import Axios from 'axios';
import { FaHeart ,FaRegHeart} from 'react-icons/fa';



const Row = ({title, fetchURL}) => {
    const [movies,setMovies] = useState([])
    const [like,setLike] = useState(false)
    useEffect(()=>{
        Axios.get(fetchURL).then((response) =>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
        <div id={'slider'}>
           {movies.map((item,id) => {
             return (
            <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2'>
              <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}/>
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-10 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                <p>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}</p>
              </div>
            </div>);
           })}
        </div>

    </div>
    </>
  )
}

export default Row