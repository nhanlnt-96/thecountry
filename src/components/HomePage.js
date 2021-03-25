import React, { useEffect, useState } from 'react';
import moment from 'moment';

const HomePage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  });

  return (
    <div>
      <p> Time : {moment(date.toLocaleTimeString()).format('HH:mm:ss')}</p>
      <p> Date : {date.toLocaleDateString()}</p>
    </div>
  );
}

export default HomePage;