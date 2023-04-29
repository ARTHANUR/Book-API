import React from "react";
import "./Card.css";

const Focus = ({ show, item  }) => {
    console.log(item);
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title;
    let buyLink = item.saleInfo.buyLink;
    let description = item.volumeInfo.description;
    let more = item.volumeInfo.infoLink;
    return (
        <>
            <div className="focus-section">
                <div className="focus">
                    <div>
                        <img src={thumbnail} alt="" />
                        <div>
                            <h1>{title}</h1>
                            <h3>- {item.volumeInfo.authors[0]}</h3>
                            <button className="btn btn-success">
                                <a href={more}>More</a>
                            </button>
                        </div>
                    </div>
                    <div className="para">
                      <p>{description}</p>
                    </div>
                    <button className="btn btn-primary">
                        
                        <a href={buyLink}>Buy Now!!</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Focus;
