'use client';

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(targetDate);
    let difference = endDate - now;

    if (difference <= 0) {
      return {};
    }

    // Calculate time left until the target date
    let timeLeft = {
      years: endDate.getFullYear() - now.getFullYear(),
      months: endDate.getMonth() - now.getMonth(),
      days: endDate.getDate() - now.getDate(),
      hours: endDate.getHours() - now.getHours(),
      minutes: endDate.getMinutes() - now.getMinutes(),
      seconds: endDate.getSeconds() - now.getSeconds(),
    };

    // Adjust for negative values
    if (timeLeft.seconds < 0) {
      timeLeft.minutes--;
      timeLeft.seconds += 60;
    }
    if (timeLeft.minutes < 0) {
      timeLeft.hours--;
      timeLeft.minutes += 60;
    }
    if (timeLeft.hours < 0) {
      timeLeft.days--;
      timeLeft.hours += 24;
    }
    if (timeLeft.days < 0) {
      timeLeft.months--;
      // Get the previous month (could be last year if December)
      let previousMonth = endDate.getMonth() - 1;
      let year = endDate.getFullYear();
      if (previousMonth < 0) {
        previousMonth += 12; // December
        year--;
      }
      // Days in the previous month
      const daysInMonth = new Date(year, previousMonth + 1, 0).getDate();
      timeLeft.days += daysInMonth;
    }
    if (timeLeft.months < 0) {
      timeLeft.years--;
      timeLeft.months += 12;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
      {Object.keys(timeLeft).length !== 0 ? (
        <div>
          <p>{timeLeft.years} years</p>
          <p>{timeLeft.months} months</p>
          <p>{timeLeft.days} days</p>
          <p>{timeLeft.hours} hours</p>
          <p>{timeLeft.minutes} minutes</p>
          <p>{timeLeft.seconds} seconds</p>
        </div>
      ) : (
        <p>Goal Reached!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
