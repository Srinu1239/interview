import {React,useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import './ImagesList.css'




const ImagesList = ({randomimages}) => {
  console.log(randomimages.length)

  // intialization of style and toggle state
  const [style, setStyle] = useState("normal");
  const [isToggle, setIsToggle] = useState(false);

  //function to switch toggle and style of image 
  const changeStyle = () => {
    console.log("you just clicked");
    setIsToggle(!isToggle)
    setStyle("gray");
  };
  
  return (
    <div>
      <div className='switch'>
      <FormControlLabel control={
      <Switch className='toggle'  
      inputProps={{ 'aria-label': 'controlled' }}
      onClick={changeStyle}/>
      } label="Make photos grayscale" />
      
      </div>
      <ImageList  sx={{ width: 750, height: 490 }} >
      {randomimages?.map((item) => (
        <ImageListItem key={item.id}>
          {!isToggle?(<img 
            src={`${item.download_url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.download_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.author}
            loading="lazy"
          />):(<img className={style}
            src={`${item.download_url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.download_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.author}
            loading="lazy"
          />)}
          <ImageListItemBar
            title={item.author}
            subtitle={item.url}
          />
        </ImageListItem>
      ))}
      </ImageList>
    </div>
    
  )
}

export default ImagesList