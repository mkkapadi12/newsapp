import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let Mystyle = {
      left: "50%",
      width: "100%",
    };
    let { title, desc, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="card text-start">
          <span
            className="position-absolute top-0 translate-middle badge bg-primary"
            style={Mystyle}
          >
            {source}
          </span>
          <img className="card-img-top" src={imgUrl} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="card-muted text-primary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
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
