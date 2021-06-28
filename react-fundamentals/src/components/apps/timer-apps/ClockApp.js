import React, { useState, useEffect } from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());
    
    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <hr className='explanation' />
            <h1 className="section-title">React Clock</h1>
            <hr className='explanation' />
            <h3>Indianapolis</h3>
            <p>{time}</p>
            <hr className='explanation' />
        </div>
    );
}

export default ClockApp;