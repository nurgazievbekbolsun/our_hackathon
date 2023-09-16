import React, { useRef, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons'
import Back from "../images/back.png"
import Back1 from "../images/1.png"
import Back2 from "../images/2.png"
import Back3 from "../images/3.png"
import Back4 from "../images/4.png"
import Back5 from "../images/5.png"
import Back6 from "../images/6.png"
import Back7 from "../images/7.png"
import Back8 from "../images/8.png"
import Back9 from "../images/9.png"
import Back10 from "../images/10.png"

export const Cards = () => {
    const slideRef = useRef(null)
    const [loadingProgress, setLoadingProgress] = useState(null)

    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll(".item");
        slideRef.current.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll(".item");
        slideRef.current.prepend(items[items.length - 1]);
    };


    const data = [
        {
            id: 1,
            imgUrl: Back,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        }
    ]
    return (
        <div className="container">
            <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
            <div id="slide" ref={slideRef}>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ backgroundImage: `url(${item.imgUrl})` }}
                    >
                        <div className="content">
                            <div className="name">{item.name}</div>
                            <div className="des">{item.desc}</div>
                            <button>See more</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button id="prev" onClick={handleClickPrev}>
                    <p>Left</p>
                </button>
                <button id="next" onClick={handleClickNext}>
                    <p>Right</p>
                </button>
            </div>
        </div>
    )
}
