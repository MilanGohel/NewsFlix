import React from "react";


const NewsItem = (props) => {
  //get the data in variables
    let { title, description, imageUrl, newsUrl, author, publish, source, mode } = props;
    return (
      <>
        <div
          className="card"
          style={{
            display: "block",
            overflow: "auto",
            scrollbarWidth: "none",
            width: "22rem",
            margin: "1.1em auto 1.1em auto",
            height: "30rem",
            
          }}
        >
          {/* Put the news in card form */}
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div
            className={`card-body bg-${mode} text-${
              mode === "dark" ? "light" : "dark"
            }`}
          >
            <h5 className="card-title">
              {title}{" "}
              <span className="position-absolute top-0 start-50 translate-middle badge mt-2 rounded-pill bg-primary" >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(publish).toGMTString()}
              </small>
            </p>
            {/* <p className="card-text mt-0"><small className="text-muted">Source: {source}</small></p> */}
            <a
              href={newsUrl}
              rel="noopener noreferrer"
              className={`btn btn-primary btn-${
                mode === "dark" ? "light" : "dark"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }


export default NewsItem;
