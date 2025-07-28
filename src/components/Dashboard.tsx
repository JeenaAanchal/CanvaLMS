import React from 'react';
import { mockCourses, mockTodos, TodoItem } from '../data/mockData';
import CourseCard from './CourseCard';
import TodoList from './TodoList';
import CalendarWidget from './CalendarWidget';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

interface DashboardProps {
  onNavigateToCourse: (courseId: string) => void;
}

export default function Dashboard({ onNavigateToCourse }: DashboardProps) {
  const [todos, setTodos] = React.useState<TodoItem[]>(mockTodos);

  const handleToggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const stats = [
    {
      label: 'Courses Enrolled',
      value: mockCourses.length,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Average Grade',
      value: '87%',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'Hours This Week',
      value: '24.5',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      label: 'Completion Rate',
      value: '92%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon size={24} className={stat.color} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View All Courses
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onNavigate={onNavigateToCourse}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* To-Do List */}
          <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
          
          {/* Calendar Widget */}
          <CalendarWidget />
          
          {/* Notification Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  System Maintenance
                </h3>
                <p className="text-sm text-blue-700 mt-1">
                  Canvas will be unavailable for maintenance on Sunday, Jan 21 from 2-4 AM EST.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}