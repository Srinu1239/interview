import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ImagesList from './Components/ImagesList';


function App() {
  //state intialization
  const [randomImages, setRandomImages] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // fetching images from API
  const fetchAPI = async()=> {
    const response = await axios.get('https://picsum.photos/v2/list?limit=100')
    const data = await response.data
    setImages(data);
  }

  useEffect(()=> {
    fetchAPI()
  },[])
  
  //getting random 4 images to disolay
  const getRandomImages = () => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    const newList =shuffled.slice(0, 4);
    setRandomImages(newList)
  }

  // 4 more images to display
  const loadMore = () => {
    setIsLoading(true);
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    const shuffled1 = shuffled.filter(value => !randomImages.includes(value))
    const newList1 =shuffled1.slice(0, 4);
    setRandomImages([...randomImages,...newList1])
    setIsLoading(false);
    };
  
  
  return (
    <div className="container">
      <div className='header'>
        <h1>Photo Fetcher</h1>
        <button className='btn' onClick={getRandomImages}>Fetch New Photos</button>
      </div>
      <br></br>
      <div className='photos'>
        {randomImages.length>0&& (<ImagesList randomimages={randomImages} />)}
        <div className='more'>
        {isLoading ? (
            <div>Loading...</div>
          ) : (
            <button onClick={loadMore}>Load More</button>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
