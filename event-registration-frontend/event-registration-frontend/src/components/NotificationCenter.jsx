import React, { useState } from 'react';
import { Bell, Calendar, MessageSquare, Gift } from 'lucide-react';

const categories = [
  { id: 'upcoming', label: 'Upcoming Events', icon: Calendar },
  { id: 'update', label: 'Event Updates', icon: Bell },
  { id: 'feedback', label: 'Feedback & Surveys', icon: MessageSquare },
  { id: 'offer', label: 'Exclusive Offers', icon: Gift },
];

const mockNotifications = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    message: 'Your event feedback is now live!',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    category: 'feedback',
    read: false,
  },
  {
    id: '2',
    title: 'Workshop Update',
    message: 'Location changed for tomorrow\'s workshop',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    category: 'update',
    read: false,
  },
];

export const NotificationCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotifications = mockNotifications.filter(notification => {
    const matchesCategory = !selectedCategory || notification.category === selectedCategory;
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-h-[400px] overflow-y-auto p-4 bg-white rounded-lg shadow-lg">
      {/* Search */}
      <div className="relative mb-3">
        <input
          type="text"
          placeholder="Search notifications..."
          className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(isActive ? null : category.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border transition-all duration-200 ${
                isActive
                  ? 'bg-purple-100 text-purple-700 border-purple-300'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Notifications */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-md border ${
                notification.read ? 'border-gray-200' : 'border-purple-200 bg-purple-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm text-gray-900">{notification.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    {notification.timestamp.toLocaleDateString()} {notification.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                {!notification.read && <span className="w-2 h-2 bg-purple-500 rounded-full mt-1" />}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center">No notifications found.</p>
        )}
      </div>
    </div>
  );
};
