import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card text-start">
          <img className="card-img-top" src={imgUrl} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{desc}</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
