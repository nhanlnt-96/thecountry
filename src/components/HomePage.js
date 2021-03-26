import React, {useEffect, useState} from 'react';
import moment from 'moment';

import '../styles/HomePage.css'

const HomePage = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div className="homepage-component">
            {/*<p> Time : {moment(date.getTime()).format('HH:mm:ss')}</p>*/}
            {/*<p> Date : {moment(date).format('DD/MM/YYYY')}</p>*/}
            <div className="homepage__time">
                <div className="border__style">
                    <p>{moment(date.getTime()).format('HH')}</p>
                </div>
                <div className="space__style">
                    <p>:</p>
                </div>
                <div className="border__style">
                    <p>{moment(date.getTime()).format('mm')}</p>
                </div>
                <div className="space__style">
                    <p>:</p>
                </div>
                <div className="border__style">
                    <p>{moment(date.getTime()).format('ss')}</p>
                </div>
            </div>

            <div className="homepage__date">
                <div className="border__style">
                    <p>{date.getDate()}</p>
                </div>
                <div className="space__style">
                    <p>/</p>
                </div>
                <div className="border__style">
                    <p>{(date.getMonth() + 1)}</p>
                </div>
                <div className="space__style">
                    <p>/</p>
                </div>
                <div className="border__style border__style__year">
                    <p>{date.getFullYear()}</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;