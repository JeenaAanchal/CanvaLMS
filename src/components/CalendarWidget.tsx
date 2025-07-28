import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarWidget() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  // Generate calendar days (simplified)
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const today = currentDate.getDate();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar size={20} className="text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{currentMonth}</p>
      </div>

      <div className="p-4">
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`
                h-8 flex items-center justify-center text-sm rounded
                ${day === null ? '' : 'hover:bg-gray-100 cursor-pointer'}
                ${day === today ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-gray-700'}
              `}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Upcoming events */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Upcoming</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-600">CS 101 Assignment Due</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Math Quiz Tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}