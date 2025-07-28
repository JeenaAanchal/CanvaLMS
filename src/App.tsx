import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CourseDetail from './components/CourseDetail';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard');
  const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null);
  
  const studentName = "Aarav Mehta";

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSelectedCourseId(null);
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const handleNavigateToCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentPage('course-detail');
  };

  const handleNavigateBack = () => {
    setCurrentPage('dashboard');
    setSelectedCourseId(null);
  };

  const renderContent = () => {
    if (currentPage === 'course-detail' && selectedCourseId) {
      return (
        <CourseDetail 
          courseId={selectedCourseId} 
          onNavigateBack={handleNavigateBack}
        />
      );
    }
    
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigateToCourse={handleNavigateToCourse} />;
      case 'courses':
        return <Dashboard onNavigateToCourse={handleNavigateToCourse} />;
      case 'calendar':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-600 mt-2">Calendar functionality coming soon...</p>
          </div>
        );
      case 'inbox':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Inbox</h1>
            <p className="text-gray-600 mt-2">Inbox functionality coming soon...</p>
          </div>
        );
      case 'help':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Help</h1>
            <p className="text-gray-600 mt-2">Help documentation coming soon...</p>
          </div>
        );
      default:
        return <Dashboard onNavigateToCourse={handleNavigateToCourse} />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={handleSidebarToggle}
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          onMenuToggle={handleSidebarToggle}
          studentName={studentName}
        />
        
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
