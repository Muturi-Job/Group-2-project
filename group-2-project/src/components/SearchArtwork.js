import React, {useState,useEffect} from "react";
import ArtCard from "./ArtCard";

function SearchArtWorks(){
    const [searchTerm, setSearchTerm] = useState("");
    const [IDs, setIDs] = useState([])
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://api.artic.edu/api/v1/artworks/search?q=painting&limit=100')
        .then(data => data.json())
        .then(artworks => setIDs(artworks.data.map(item => item.id)))
        .catch(err=> console.log(err))
    
    },[])
    useEffect(()=>{
        IDs.map(id =>
            fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
            .then(data =>data.json())
            .then(item => setItems((prevItem => [...prevItem,item.data])))
            .catch(err => console.log(err))
            )
    },[IDs])

    return(
        <div>
            <input type="text" className="search" placeholder="Search artworks.."
            value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} 
            />
            <h1>hello</h1>
            <div className="parent">
                {
                    items.filter(item =>item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item, index) => 
                    <ArtCard key= {index} item={item} />
                    )
                }
            </div>
        </div>
    )
  
       
}
export default SearchArtWorks;