import logo from './logo.svg';
import './App.css';
import { Button, Grid, Card, CardMedia } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [images, setImages] = useState([])
  const [imagesperpage, setImagesPerPage] = useState(4)
  const [page, setPage] = useState(1)

  const data = [
    "https://cdn.midjourney.com/0b33e5b2-ada4-49b7-b841-57d0603cde8e/0_1.png",
    "https://cdn.midjourney.com/dd8019be-41ad-419f-a534-5273ad8abbbb/0_0.png",
    "https://cdn.midjourney.com/0432cec0-e539-4cfd-a666-ae3894811c1e/0_3.png",
    "https://cdn.midjourney.com/dd173868-65f3-4576-97ee-b80bf7ebef13/0_3.png",
    "https://cdn.midjourney.com/0ae956ad-c6a9-40bd-bec9-b04eb38b139d/0_1.png",
    "https://cdn.midjourney.com/d3bf7d05-1899-4c18-9fdf-18facd3051f8/0_0.png",
    "https://cdn.midjourney.com/9a85bb5d-3c3e-418f-bf12-371e277cff81/0_0.png",
    "https://cdn.midjourney.com/949bd732-8f7b-4458-888c-43adf622a66e/0_0.png",
    "https://cdn.midjourney.com/c3c7eb4b-d527-4260-a1ca-868a8f94575c/0_3.png",
    "https://cdn.midjourney.com/02ad9e28-6d6b-41b8-85c5-e436714fa58a/0_3.png",
    "https://cdn.midjourney.com/aac1ec6d-461c-40d3-a206-62eca9457382/0_2.png",
    "https://cdn.midjourney.com/b3ec7454-b764-4239-b693-b956c42e4b8a/0_0.png",
    "https://cdn.midjourney.com/e68698d9-74a0-46ac-bc19-297007f58069/0_0.png",
    "https://cdn.midjourney.com/862985fb-ed88-49fb-81a4-0988dd6e90fd/0_0.png",
    "https://cdn.midjourney.com/0b719e63-f64c-4d50-a84b-19b5ccb02e8d/0_0.png",
    "https://cdn.midjourney.com/1b738b04-8235-4cf5-80b9-e83a8b23c1f9/0_0.png",
    "https://cdn.midjourney.com/87cd5d15-601c-4877-a609-f05f3097432b/0_0.png",
    "https://cdn.midjourney.com/4e77bbcd-6fd6-4a68-b153-cb520b89f227/0_2.png"
  ]

  useEffect(() => {

    setImages(data.slice(0, page * imagesperpage))

  },[page])
  return (
    <div className="App">
    <Grid container>
    {images.map(image => {
        return (
          
            <Grid item xs={6}>
              <Card>
              <CardMedia
                component="img"
                height="300"
                image={image}
                alt="Paella dish"
              />
              </Card>
           
          </Grid>
        )
      })}
       </Grid>
       <Button variant='contained' style={{backgroundColor:"black", margin:"1%"}} onClick={() => setPage(page + 1)}>LOAD MORE</Button>
    </div>
  );
}

export default App;
