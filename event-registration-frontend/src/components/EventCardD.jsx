// src/components/EventCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// src/components/EventCard.jsx
const EventCard = ({ title, date, time, location, description, attendees, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{date} | {time}</p>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
        <p className="text-sm text-purple-600 mt-2">Attendees: {attendees}</p>
      </div>
    </div>
  );
};

export default EventCard;

