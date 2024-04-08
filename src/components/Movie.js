import React ,{ useState }from 'react';
import { FaHeart ,FaRegHeart} from 'react-icons/fa';

const Movie = ({item}) => {
    const [like,setLike] = useState(false);
  return (
    <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-10 text-white'>
      <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
      <p className='font-bold'>{like ? <FaHeart className='absolute top-4 left-4 text-white-300 text-5xl' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300 text-2xl'/>}</p>
    </div>
  </div>
  )
}

export default Movie