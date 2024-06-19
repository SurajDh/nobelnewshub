import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

function News(props) {
 
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [pageSize, setPageSize] = useState(9);
  // eslint-disable-next-line
  
  const [totalResults, setTotalResults] = useState(0);
  
  
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&in&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
 
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
  
  useEffect(() => {// eslint-disable-next-line
    document.title = `${props.category} | NobelNewsHub`;// eslint-disable-next-line
   updateNews();// eslint-disable-next-line
  }, []);// eslint-disable-next-line


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&in&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    


  };


  return (<>
      <div className="container my-3" >
      <h1 className='text-center' style={{marginTop:'90px'}}>Top {props.category} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row my-3 mx-2">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:''} description={element.description?element.description:''} imageUrl={element.urlToImage}
                url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>

      </InfiniteScroll>

    </div>
  </>
  )

}

News.defaultProps = {

  country: 'in',
  pageSize: 9,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
