import React , {useState} from "react";
import Card from "./Card";
import "./Home.css"
import axios from "axios";

const Home = () => {

const [search , setSearch] = useState("")
const [bookData , setData] = useState([])


const searchBook = (evt) => {
    if (evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAMVPrrtH0JZygn502ZaZbqD0rMmvr88P8'+'&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    
}

    return (
        <>
            <div className="home">
                <div className="input-section">
                    <input type="text" value={search} onChange={ (e) => {setSearch(e.target.value)} } onKeyPress={searchBook}   />
                </div>
                <div className="result-section">
                    {<Card book = {bookData} />}
                </div>
            </div>
        </>
    );
};

export default Home;
