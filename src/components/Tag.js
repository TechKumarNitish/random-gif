import React from 'react';
import { useState} from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {

  // const[gif,setGif]=useState('');
  // const[loading,setLoading]=useState(false);
  const[tag,setTag]=useState('car');
  
  // async function fetchData(){
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])
  
  const{gif,loading,fetchData}=useGif(tag);

  // function clickHandler(){
  //   fetchData();
  // } 

  // function changeHandler(event){
  //   setTag(event.target.value);
  // }

  return(
  <div className="w-1/2 bg-blue-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]">
    <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
    {
      loading?
      <Spinner/>:
      <img src={gif}
      width="450"
      alt="gif"
      />
    }

    <input
    value={tag}
    className='text-center mb-[3px] w-10/12 py-2 text-lg rounded-lg'
    onChange={(event)=>setTag(event.target.value)/*changeHandler*/}
    />
    <button 
    className='mb-[20px] w-10/12 bg-yellow-500 py-2 text-lg rounded-lg'
    onClick={()=>fetchData(tag)/*clickHandler*/}
    >
      Generate
    </button>
  </div>);
}
