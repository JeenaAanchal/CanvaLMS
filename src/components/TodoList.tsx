import React from 'react';
import { TodoItem } from '../data/mockData';
import { CheckCircle2, Circle, Calendar, FileText, MessageSquare, HelpCircle } from 'lucide-react';

interface TodoListProps {
  todos: TodoItem[];
  onToggleTodo: (id: string) => void;
}

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

const formatDueDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Due today';
  if (diffDays === 1) return 'Due tomorrow';
  if (diffDays < 0) return `Overdue by ${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? 's' : ''}`;
  return `Due in ${diffDays} day${diffDays > 1 ? 's' : ''}`;
};

export default function TodoList({ todos, onToggleTodo }: TodoListProps) {
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">To Do</h2>
        <p className="text-sm text-gray-600 mt-1">
          {incompleteTodos.length} item{incompleteTodos.length !== 1 ? 's' : ''} need your attention
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {/* Incomplete todos */}
        {incompleteTodos.map((todo) => (
          <div key={todo.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start space-x-3">
              <button
                onClick={() => onToggleTodo(todo.id)}
                className="mt-1 text-gray-400 hover:text-blue-600"
              >
                <Circle size={20} />
              </button>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {getTypeIcon(todo.type)}
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {todo.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">
                  {todo.course}
                </p>
                
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={12} className="mr-1" />
                  <span className={`
                    ${new Date(todo.dueDate) < new Date() ? 'text-red-600 font-medium' : ''}
                  `}>
                    {formatDueDate(todo.dueDate)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Completed todos */}
        {completedTodos.length > 0 && (
          <>
            <div className="p-4 bg-gray-50">
              <h3 className="text-sm font-medium text-gray-700">
                Completed ({completedTodos.length})
              </h3>
            </div>
            {completedTodos.map((todo) => (
              <div key={todo.id} className="p-4 hover:bg-gray-50 opacity-60">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => onToggleTodo(todo.id)}
                    className="mt-1 text-green-600"
                  >
                    <CheckCircle2 size={20} />
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      {getTypeIcon(todo.type)}
                      <h3 className="text-sm font-medium text-gray-900 truncate line-through">
                        {todo.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {todo.course}
                    </p>
                    
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {todos.length === 0 && (
          <div className="p-8 text-center">
            <div className="text-gray-400 mb-2">
              <CheckCircle2 size={48} className="mx-auto" />
            </div>
            <p className="text-gray-600">All caught up! No items in your to-do list.</p>
          </div>
        )}
      </div>
    </div>
  );
}