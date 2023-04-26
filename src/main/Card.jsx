import React from "react";
import "./Card.css";

const Card = ({ book }) => {
    console.log(book);
    return (
        <>
            {book.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                let title = item.volumeInfo.title;

                if (thumbnail != undefined && amount != undefined) {
                    return (
                        <>
                            <div className="card-section">
                                <img src={thumbnail} alt="" />
                                <h1>{title}</h1>
                                <h3>- {item.volumeInfo.authors[0]}</h3>
                                <div>
                                    <h3>
                                        {" "}
                                        <em> &#8377;</em> {amount}
                                    </h3>
                                    <p>
                                        {item.volumeInfo.pageCount} <em> pages </em>
                                    </p>
                                </div>
                            </div>
                        </>
                    );
                }
            })}
        </>
    );
};

export default Card;
