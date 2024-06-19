import React from 'react'
import NNHpic from './NNH.png'
import './NewsItem.css';

function NewsItem(props) {

    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <a href={url} target='_blank' rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{
                        display: "flex", position: 'absolute', right: "0"
                    }}>
                        <span className=" badge rounded-pill bg-danger">{source}
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : NNHpic} className="card-img-top" style={{ height: "15rem" }} alt={imageUrl} />
                    <div className="card-body ">

                        <h5 className="card-title">{title ? title.slice(0, 45) : ''}...</h5>
                        <p className="card-text">{description ? description.slice(0, 88) : ''}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target='_blank' className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>



                    </div>
                    </a>
            </div>
        </div>
    )

}

export default NewsItem
