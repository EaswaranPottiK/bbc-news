import React, { useEffect,useState } from 'react'

const Body = (props) => {
    const [news,setNews] = useState([])
    const getNews = () =>{
        var url = 'https://newsapi.org/v2/everything?' +
          'q=All&' +
        // 'q='+props.men+'&' +
        //   'from=2024-02-03&' +
          'sortBy=popularity&' +
        'apiKey=b2c85f956e9a4f4db3b9123f6b707d67';
    fetch(url)
    .then(res => res.json())
    .then(item => setNews(item.articles))
    }
    console.log(news)
    useEffect(()=>{getNews()},[])
  return (
    <div className='mt-20 p-5 grid grid-cols-4 gap-4'>
        {news.map((data)=>{
            return <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={data.urlToImage} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{data.title}</div>
                <p class="text-gray-700 text-base">
                {data.description}
                </p>
            </div>
            </div>
            </>
        })}
    </div>
  )
}

export default Body