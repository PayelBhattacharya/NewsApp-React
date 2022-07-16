// import React, { Component } from 'react'
import React from 'react'

// export class NewsItem extends Component 
const NewsItem = (props)=>{

  // render() {
    // let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{left:'90%', zIndex: '1',height: '24px'}}>{source}</span>
        <img src={imageUrl ? imageUrl : "https://www.techexplorist.com/wp-content/uploads/2022/02/robber-fly.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-danger">by {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary btn-dark">Read More</a>
        </div>
      </div>
      </div >
    )
  // }
}

export default NewsItem
