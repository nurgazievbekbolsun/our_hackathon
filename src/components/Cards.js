import React, { useRef, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons'
import Back0 from "../images/back.png"
import Back1 from "../images/1.png"
import Back2 from "../images/2.jpg"
import Back3 from "../images/3.jpg"
import Back4 from "../images/4.jpg"
import Back5 from "../images/5.jpg"
import Back6 from "../images/6.jpg"
import Back7 from "../images/7.jpg"
import Back8 from "../images/8.jpg"
import Back9 from "../images/9.jpg"
// import Back10 from "../images/10.jpg"

export const Cards = () => {
    return (
        <div>
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
            imgUrl: Back0,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 2,
            imgUrl: Back1,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 3,
            imgUrl: Back2,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 4,
            imgUrl: Back3,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 5,
            imgUrl: Back4,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 6,
            imgUrl: Back5,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 7,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 8,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 9,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 10,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 11,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 12,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 13,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
        {
            id: 14,
            imgUrl: Back6,
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "EXPLORE NATURE",
        },
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
                    <p>-</p>
                </button>
                <button id="next" onClick={handleClickNext}>
                    <p>+</p>
                </button>
            </div>
        </div>
    )
}
