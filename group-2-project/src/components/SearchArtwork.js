import React, {useState,useEffect} from "react";
import Search from "./Search";

function SearchArtWorks(){
    const [query, setQuery] = useState('');
    const [IDs, setIDs] = useState([])
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://api.artic.edu/api/v1/artworks/search?q=painting&limit=100')
        .then(data => data.json())
        .then(artworks => setIDs(artworks.data.map(item => item.id)))
        .catch(err=> console.log(err))
    
    },[])

  
       
}
export default SearchArtWorks;