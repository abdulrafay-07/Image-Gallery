import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term])

  return (
    <div className="container mx-auto p-4 lg:p-10">
      <h1 className="text-center text-5xl font-bold my-4">Image Gallery</h1>
      <Search searchText={(text) => setTerm(text)} />
      {
        !isLoading && images.length === 0 && 
          <h1 className="text-4xl md:text-6xl text-center mt-20">No Images Found.</h1>
      }
      {
        isLoading ?
          <h1 className="text-6xl grid place-items-center h-screen">Loading..</h1>
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              images.map((image) => (
                <ImageCard key={image.id} image={image} />
              ))
            }
          </div>
      }
    </div>
  )
}

export default App;