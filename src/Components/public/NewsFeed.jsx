import React from 'react'
import './news.scss'

const NewsCard = () => {
    return(
        <div className="news">
            <div className="image">
                <img src="https://www.newscutter.lk/wp-content/uploads/2022/10/Screenshot-2022-10-06-at-17.37.34-850x541.png" alt="sample_image" />
            </div>

            <div className="content">
                <h3>Sample Title</h3>
                <p className="discretion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi pariatur alias architecto repellendus necessitatibus similique quos quisquam delectus molestiae temporibus. Autem nemo at rerum qui commodi voluptatum quo. Illum, architecto.</p>
                <p className='date'>2022-11-25</p>
            </div>
        </div>
    )
}

const NewsFeed = () => {
  return (
    <div id='news-feed'>
        {/* COVER */}
        {/* <div className="cover">
            <div className="cover-img"></div>
        </div> */}

        {/* LOOP */}
        <div className="card-container">
            <NewsCard />
        </div>
    </div>
  )
}

export default NewsFeed