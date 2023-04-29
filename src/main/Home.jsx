import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./Card.css";
import Focus from "./Focus ";

const Home = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios
                .get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyAMVPrrtH0JZygn502ZaZbqD0rMmvr88P8" + "&maxResults=40")
                .then((res) => setData(res.data.items))
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <div className="home">
                <h1>Book Search</h1>
                <div className="input-section">
                    <input
                        placeholder=" &#128270; Enter The Book Name"
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        onKeyPress={searchBook}
                    />
                </div>
                <div className="result-section">{<Card book={bookData} />}</div>
            </div>
        </>
    );
};

export default Home;
