import React from 'react';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Mail, 
  HelpCircle, 
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'inbox', label: 'Inbox', icon: Mail },
  { id: 'help', label: 'Help', icon: HelpCircle },
];

export default function Sidebar({ isOpen, onToggle, currentPage, onNavigate }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-gray-900 text-white z-50 transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-0 lg:w-16'}
        lg:relative lg:z-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className={`font-bold text-xl ${!isOpen && 'lg:hidden'}`}>
            Canvas
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 rounded hover:bg-gray-700"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors
                  ${isActive ? 'bg-blue-600 border-r-4 border-blue-400' : ''}
                `}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className={`ml-3 ${!isOpen && 'lg:hidden'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}