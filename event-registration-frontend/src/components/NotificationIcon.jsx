// NotificationIcon.jsx - Update the View All button to navigate to notifications page
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

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
  {
    id: '3',
    title: 'Early Bird Offer',
    message: 'Get 20% off on upcoming events!',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    category: 'offer',
    read: true,
  },
];

export const NotificationIcon = ({ onViewAll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  const handleViewAll = () => {
    setIsOpen(false); // Close the dropdown
    if (onViewAll) {
      onViewAll(); // Call the callback function to show NotificationCenter
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transform transition-all duration-200 ease-in-out">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {mockNotifications.slice(0, 5).map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                  !notification.read ? 'bg-purple-50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                    </p>
                  </div>
                  {!notification.read && (
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleViewAll}
              className="block w-full text-center py-2 px-4 bg-gradient-to-r from-[#310C7E] to-[#9372C1] text-white rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};