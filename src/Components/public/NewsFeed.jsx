import React, { useEffect, useState } from 'react'
import './news.scss'
import { CiTrash } from "react-icons/ci";
import instance from '../../utility/AxiosInstance';

const NewsCard = (props) => {

    const deleteNews = async() => {

        if(props.user === 'admin'){
            try{
                const res = await instance.delete(`admin/news/${props.news_id}`)
                alert(res.data.message)
                props.trigger(prv => !prv)
            }
            catch(err){
                console.log(err)
            }
        }
        else if(props.user === 'midwife'){
            try{
                const res = await instance.delete(`midwife/news/${props.news_id}`)
                alert(res.data.message)
                props.trigger(prv => !prv)
            }
            catch(err){
                console.log(err)
            }
        }

    }
    return (
        <div className="news">
            <div className="image">
                <img src={`http://localhost:3005/public/image/${props.image}`} alt="sample_image" />
            </div>

            <div className="content">
                <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Sample Title <CiTrash color='red' size={22} className='bin-icon' onClick={deleteNews} /></h3>
                <p className="discretion">{props.summary}</p>
                <p className='date'>{props.date}</p>
            </div>
        </div>
    )
}

const NewsFeed = (props) => {
    const[news, setNews] = useState([])
    const[trigger, setTrigger] = useState(false)
    
    useEffect(() => {
        const getAllNews = async () => {
            try{
                const res = await instance.get('public/news')
                setNews(res.data)
                console.log(res.data);
            }
            catch(err){
                console.log(err)
            }
        }

        getAllNews()
    }, [trigger])

    if(news.length === 0){
        return(
            <div className='newsFeed-container'>
                <div className='card-fram'>
                    <h1 style={{fontSize: 25}}>No News</h1>
                </div>
            </div>
        )
    }

    return (
        <div className='newsFeed-container'>
            <div className='card-fram'>
                {
                    news.map((item, index) => {
                        const date = item.date.split('T')[0];
                        return(
                            <div key={item.news_id}>
                                <NewsCard title={item.title} trigger={setTrigger} news_id={item.news_id} summary={item.summary} date={date} image={item.image} user={props.user} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewsFeed