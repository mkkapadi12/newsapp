import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("This is a constructor for News.");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // let url =
    // "https://newsapi.org/v2/top-headlines?country=in&apiKey=c1918ffb7ae1428aabd51ca1ec357945&page=1&pageSize=10";
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c1918ffb7ae1428aabd51ca1ec357945&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsendData = await data.json();
    // console.log(parsendData);
    this.setState({
      articles: parsendData.articles,
      totalResults: parsendData.totalResults,
    });
  }

  handlePrev = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c1918ffb7ae1428aabd51ca1ec357945&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1918ffb7ae1428aabd51ca1ec357945&page=${
    //   this.state.page - 1
    // }&pageSize=10`;
    let data = await fetch(url);
    let parsendData = await data.json();
    // console.log(parsendData);
    this.setState({
      articles: parsendData.articles,
      page: this.state.page - 1,
    });
  };

  handleNext = async () => {
    console.log("Next");

    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c1918ffb7ae1428aabd51ca1ec357945&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1918ffb7ae1428aabd51ca1ec357945&page=${
      // this.state.page + 1
      // }&pageSize=10`;
      let data = await fetch(url);
      let parsendData = await data.json();
      // console.log(parsendData);
      this.setState({
        articles: parsendData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">News Monkey - Top news</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    desc={
                      element.description
                        ? element.description
                        : "Israel-Hamas war news: US President hints at India-Middle East-Europe Economic Corridor as reason for Hamas attack. According to reports, Israel-Hamas war can derail the peace deal between Israel, and Saudi Arabia."
                    }
                    imgUrl={
                      !element.urlToImage
                        ? "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202310/hamas-says-around-50-captives-killed-in-israeli-strikes-in-gaza-262623125-16x9_0.jpg?VersionId=kXyQ5GL8l03POSm5vRMIF9C3.sxk2UXE"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.handlePrev}
            >
              &larr; Previous
            </button>

            <button
              className="btn btn-dark"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
