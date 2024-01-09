import React from 'react'
import './addNews.scss'

const AddNews = () => {
  return (
    <div id='add-news'>
        <h3>Add News</h3>
        <form>
            <div className="row">
                <label htmlFor="news-title">Title</label>
                <input type="text" name='news-title' id='news-title' placeholder='Enter News Title' />
            </div>
            
            <div className="row">
                <label htmlFor="news-content">News Content</label>
                <textarea name="news-content" id="news-content" cols="30" rows="10" placeholder='Enter News Content'></textarea>
            </div>

            <div className="row">
                <label htmlFor="news-image-file">Choose Image</label>
                <input type="file" name='news-image-file' id='news-image-file' />
            </div>
            
            <div className="row submit-button">
                <input type="submit" value="Add News" />
            </div>
        </form>
    </div>
  )
}

export default AddNews