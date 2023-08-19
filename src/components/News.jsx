import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import lightLogo from './png/logo-black.png'
import darkLogo from './png/logo-color.png'
import Spinner from './Spinner.jsx'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'



const News = (props) => {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  useEffect(() => {
    updateNews();
  }, [])

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
    document.title = `${capitalizeFirstLetter(props.category)} | NewsFlix`

  
  //update the news
  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=de43b305b9874e029c1be2c2c99070bf&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(20);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
     
   }
   //fetches the news and append with current news
  const fetchMoreData = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=de43b305b9874e029c1be2c2c99070bf&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
      console.log("you are in fetch more data")
        console.log(url);
        props.setProgress(0);
        
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(10)
        let parsedData = await data.json()
        props.setProgress(100)
       
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
  }
          
    return (
      <>
      <div className={`background bg-${props.mode}`}>
          <div className={`container bg-${props.mode}`}>  
          {/* dark and light */}
            <h1 className={`text-center mt-5 text-${props.mode==='dark'?'light':'dark'}`}>Top Headlines-{capitalizeFirstLetter(props.category)}</h1>
            {/* add new news with old news */}
              <InfiniteScroll
                      dataLength={articles.length}
                      next={fetchMoreData}
                      hasMore={articles !== totalResults}
                      loader={<Spinner/>}
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      }
                    >
              <div className='container'>
              <div className="row d-flex justify-content-between">
            {articles.map((element)=>{
              return <div key={element.url} className="col-md-4" >
                              <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:props.mode==='dark'?darkLogo:lightLogo} newsUrl={element.url} mode={props.mode} author={element.author} publish={element.publishedAt} source={element.source.name}/>
                          </div>
            })}
            </div>
      </div>
            </InfiniteScroll>
            
          </div>
      </div>
      </>
    )
  }
//default props
News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: 'general'
}
//proptypes
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;