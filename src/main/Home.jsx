import React , {useState} from "react";
import Card from "./Card";
import "./Home.css"

const Home = () => {

const [search , setSearch] = useState("")


const searchBook = () => {
    console.log("hello")
}

    return (
        <>
            <div className="home">
                <div className="input-section">
                    <input type="text" value={search} onChange={ (e) => {setSearch(e.target.value)} }   />
                    <button  onClick={searchBook} > + </button>
                </div>
                <div className="result-section">
                    <Card />
                    
                </div>
            </div>
        </>
    );
};

export default Home;
