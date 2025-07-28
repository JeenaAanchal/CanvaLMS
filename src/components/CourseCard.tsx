import React from 'react';
import { Course } from '../data/mockData';
import { ArrowRight, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onNavigate: (courseId: string) => void;
}

export default function CourseCard({ course, onNavigate }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Course header with color */}
      <div className={`h-3 ${course.color}`} />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              {course.code} • {course.term}
            </p>
            <p className="text-sm text-gray-500">
              {course.instructor}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${course.color}`}
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        {/* Recent activity */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock size={14} className="mr-1" />
          <span>Last accessed 2 hours ago</span>
        </div>

        {/* Go to course button */}
        <button
          onClick={() => onNavigate(course.id)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          Go to Course
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
}