import React from 'react';
import { mockCourses, mockAssignments, mockGrades } from '../data/mockData';
import Breadcrumb from './Breadcrumb';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  FileText, 
  MessageSquare, 
  HelpCircle,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

interface CourseDetailProps {
  courseId: string;
  onNavigateBack: () => void;
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'assignments', label: 'Assignments', icon: FileText },
  { id: 'grades', label: 'Grades', icon: CheckCircle }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'submitted':
      return <CheckCircle size={16} className="text-green-500" />;
    case 'missing':
      return <XCircle size={16} className="text-red-500" />;
    case 'upcoming':
      return <AlertCircle size={16} className="text-yellow-500" />;
    default:
      return <Clock size={16} className="text-gray-500" />;
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'assignment':
      return <FileText size={16} className="text-blue-500" />;
    case 'quiz':
      return <HelpCircle size={16} className="text-green-500" />;
    case 'discussion':
      return <MessageSquare size={16} className="text-purple-500" />;
    default:
      return <FileText size={16} className="text-gray-500" />;
  }
};

export default function CourseDetail({ courseId, onNavigateBack }: CourseDetailProps) {
  const [activeTab, setActiveTab] = React.useState('overview');
  
  const course = mockCourses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <button
            onClick={onNavigateBack}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Dashboard', onClick: onNavigateBack },
    { label: 'Courses' },
    { label: course.title }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Course Info */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-1">{course.code} • {course.term}</p>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
          </div>
          <div className={`w-16 h-16 ${course.color} rounded-lg flex items-center justify-center`}>
            <BookOpen size={32} className="text-white" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Users size={24} className="mx-auto text-gray-600 mb-2" />
            <p className="text-sm text-gray-600">Students</p>
            <p className="text-xl font-bold text-gray-900">247</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Calendar size={24} className="mx-auto text-gray-600 mb-2" />
            <p className="text-sm text-gray-600">Assignments</p>
            <p className="text-xl font-bold text-gray-900">12</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Clock size={24} className="mx-auto text-gray-600 mb-2" />
            <p className="text-sm text-gray-600">Progress</p>
            <p className="text-xl font-bold text-gray-900">{course.progress}%</p>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Description</h3>
        <p className="text-gray-700 leading-relaxed">
          This course provides a comprehensive introduction to computer science fundamentals, 
          including programming concepts, data structures, algorithms, and problem-solving techniques. 
          Students will learn to write efficient code, analyze computational complexity, and develop 
          critical thinking skills essential for software development.
        </p>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <FileText size={20} className="text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">New assignment posted</p>
              <p className="text-sm text-gray-600">Programming Assignment #3: Data Structures</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle size={20} className="text-green-600" />
            <div>
              <p className="font-medium text-gray-900">Grade posted</p>
              <p className="text-sm text-gray-600">Programming Assignment #2: 88/100</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
            <MessageSquare size={20} className="text-purple-600" />
            <div>
              <p className="font-medium text-gray-900">Discussion updated</p>
              <p className="text-sm text-gray-600">Algorithm Complexity - 3 new replies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Assignments</h3>
        <p className="text-sm text-gray-600 mt-1">
          {mockAssignments.filter(a => a.status === 'upcoming').length} upcoming assignments
        </p>
      </div>
      
      <div className="divide-y divide-gray-100">
        {mockAssignments.map((assignment) => (
          <div key={assignment.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getTypeIcon(assignment.type)}
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    {assignment.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                    <span>{assignment.points} points</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {getStatusIcon(assignment.status)}
                <span className={`text-sm font-medium capitalize ${
                  assignment.status === 'submitted' ? 'text-green-600' :
                  assignment.status === 'missing' ? 'text-red-600' :
                  'text-yellow-600'
                }`}>
                  {assignment.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGrades = () => {
    const totalPoints = mockGrades.reduce((sum, grade) => sum + grade.total, 0);
    const earnedPoints = mockGrades.reduce((sum, grade) => sum + grade.score, 0);
    const overallPercentage = Math.round((earnedPoints / totalPoints) * 100);

    return (
      <div className="space-y-6">
        {/* Grade Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Current Grade</p>
              <p className="text-3xl font-bold text-blue-600">{overallPercentage}%</p>
              <p className="text-sm text-gray-600">B+</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Points Earned</p>
              <p className="text-3xl font-bold text-green-600">{earnedPoints}</p>
              <p className="text-sm text-gray-600">out of {totalPoints}</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Assignments</p>
              <p className="text-3xl font-bold text-purple-600">{mockGrades.length}</p>
              <p className="text-sm text-gray-600">graded</p>
            </div>
          </div>
        </div>

        {/* Grades Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Individual Grades</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Percentage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockGrades.map((grade) => (
                  <tr key={grade.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {grade.assignment}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {grade.score}/{grade.total}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {grade.percentage}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        grade.letterGrade.startsWith('A') ? 'bg-green-100 text-green-800' :
                        grade.letterGrade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                        grade.letterGrade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {grade.letterGrade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(grade.submittedDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'assignments':
        return renderAssignments();
      case 'grades':
        return renderGrades();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Course Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
            <BookOpen size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-gray-600">{course.code} • {course.instructor}</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Course Progress</span>
            <span className="text-sm text-gray-600">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full ${course.color}`}
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}