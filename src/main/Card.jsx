import React from "react";
import "./Card.css";

const Card = ({ book }) => {
    console.log(book);
    return (
        <>
            {book.map((item) => {
              let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                return (
                    <>
                        <div className="card-section">
                            <img src={thumbnail} alt="" />
                            <h1>Name</h1>
                            <h3>$69</h3>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Card;
