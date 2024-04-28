import React from 'react'
import NNHpic from './NNH.png'

function NewsItem(props) {

    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
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

            </div>
        </div>
    )

}

export default NewsItem
