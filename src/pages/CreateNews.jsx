import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CreateNews(props) {
  const [newsInfo, setNewsInfo] = useState({
    headline: "",
    subHeadline: "",
    imgUrl: "",
    newsType: "local"
  })

  function handleSubmit(event){
    event.preventDefault()
    props.createNews(newsInfo)
    const hiddenLink = document.getElementById("hiddenLink")
    hiddenLink.click()

    setTimeout(()=>{
        setNewsInfo((prev)=>{
            return ({
                ...prev,
                headline: "",
                subHeadline: "",
                imgUrl: "",
            })
        })
    }, 500)
  }

  useEffect(()=>{
    const newsTypes = document.querySelectorAll(".news-type")

    newsTypes.forEach((button)=>{
        button.addEventListener("click", ()=>{
            newsTypes.forEach((guy)=>{
                guy.classList.remove("active")
            })
            button.classList.add("active")
            const thisId = button.getAttribute("id")
            setNewsInfo((prev)=>{
                return({
                    ...prev,
                    newsType: thisId
                })
            })
        })
    })
  }, [])

  return (
    <div className='create-news'>
      <Link id='hiddenLink' to={"/"} style={{
        display: "none"
      }}>Done</Link>
      <div className="content">
        <div className="select-type">
            <button id='local' className='active news-type'>
                Local
            </button>
            <button id='foreign' className='news-type'>
                Foreign
            </button>
            <button id='politics' className='news-type'>
                Politics
            </button>
            <button id='education' className='news-type'>
                Education
            </button>
            <button id='sports' className='news-type'>
                Sports
            </button>
            <button id='entertainment' className='news-type'>
                Entertainment
            </button>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="headline">
                <label htmlFor="headline">Headline</label>
                <input onChange={(event)=>{
                    setNewsInfo((prev)=>{
                        return ({
                            ...prev,
                            headline: event.target.value
                        })
                    })
                }} value={newsInfo.headline} id='headline' placeholder='Tinubu awards Idan TV as TV station of the decade' type="text" required maxLength={"40"} minLength={"4"} />
            </div>
            <div className="sub-headline">
                <label htmlFor="sub-headline">Sub-Headline</label>
                <textarea onChange={(event)=>{
                    setNewsInfo((prev)=>{
                        return ({
                            ...prev,
                            subHeadline: event.target.value
                        })
                    })
                }} value={newsInfo.subHeadline} placeholder='Idan TV has been awarded by the Federal Government of Nigeria as...' required id='sub-headline' maxLength={"120"} minLength={"4"} />
            </div>
            <div className="img-url">
                <label htmlFor="img-url">Image URL</label>
                <input onChange={(event)=>{
                    setNewsInfo((prev)=>{
                        return ({
                            ...prev,
                            imgUrl: event.target.value
                        })
                    })
                }} value={newsInfo.imgUrl} id='img-url' type="url" required maxLength={"10000"} minLength={"4"} placeholder='https://anyimage.jpg' />
            </div>
            <button>Done</button>
        </form>
      </div>
    </div>
  )
}

export default CreateNews
