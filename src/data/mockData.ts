export interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  color: string;
  code: string;
  term: string;
}

export interface TodoItem {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  completed: boolean;
  type: 'assignment' | 'quiz' | 'discussion';
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  points: number;
  status: 'submitted' | 'missing' | 'upcoming';
  type: 'assignment' | 'quiz' | 'discussion';
}

export interface Grade {
  id: string;
  assignment: string;
  score: number;
  total: number;
  percentage: number;
  letterGrade: string;
  submittedDate: string;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Priya Sharma',
    progress: 78,
    color: 'bg-blue-500',
    code: 'CS 101',
    term: 'Fall 2024'
  },
  {
    id: '2',
    title: 'Calculus I',
    instructor: 'Prof. Arjun Patel',
    progress: 65,
    color: 'bg-green-500',
    code: 'MATH 151',
    term: 'Fall 2024'
  },
  {
    id: '3',
    title: 'English Composition',
    instructor: 'Dr. Kavya Reddy',
    progress: 92,
    color: 'bg-purple-500',
    code: 'ENG 101',
    term: 'Fall 2024'
  },
  {
    id: '4',
    title: 'Physics I',
    instructor: 'Dr. Rajesh Kumar',
    progress: 55,
    color: 'bg-red-500',
    code: 'PHYS 201',
    term: 'Fall 2024'
  },
  {
    id: '5',
    title: 'World History',
    instructor: 'Prof. Meera Gupta',
    progress: 88,
    color: 'bg-yellow-500',
    code: 'HIST 101',
    term: 'Fall 2024'
  },
  {
    id: '6',
    title: 'Biology I',
    instructor: 'Dr. Vikram Singh',
    progress: 72,
    color: 'bg-indigo-500',
    code: 'BIO 101',
    term: 'Fall 2024'
  }
];

export const mockTodos: TodoItem[] = [
  {
    id: '1',
    title: 'Submit Programming Assignment #3',
    course: 'CS 101',
    dueDate: '2024-01-15',
    completed: false,
    type: 'assignment'
  },
  {
    id: '2',
    title: 'Complete Calculus Quiz 4',
    course: 'MATH 151',
    dueDate: '2024-01-16',
    completed: false,
    type: 'quiz'
  },
  {
    id: '3',
    title: 'Discussion Post: Shakespeare Analysis',
    course: 'ENG 101',
    dueDate: '2024-01-17',
    completed: true,
    type: 'discussion'
  },
  {
    id: '4',
    title: 'Physics Lab Report #2',
    course: 'PHYS 201',
    dueDate: '2024-01-18',
    completed: false,
    type: 'assignment'
  },
  {
    id: '5',
    title: 'History Essay: Industrial Revolution',
    course: 'HIST 101',
    dueDate: '2024-01-20',
    completed: false,
    type: 'assignment'
  }
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Programming Assignment #3: Data Structures',
    dueDate: '2024-01-15',
    points: 100,
    status: 'upcoming',
    type: 'assignment'
  },
  {
    id: '2',
    title: 'Midterm Exam',
    dueDate: '2024-01-22',
    points: 200,
    status: 'upcoming',
    type: 'quiz'
  },
  {
    id: '3',
    title: 'Algorithm Analysis Discussion',
    dueDate: '2024-01-10',
    points: 50,
    status: 'submitted',
    type: 'discussion'
  },
  {
    id: '4',
    title: 'Programming Assignment #2: Sorting',
    dueDate: '2024-01-08',
    points: 100,
    status: 'submitted',
    type: 'assignment'
  },
  {
    id: '5',
    title: 'Quiz: Basic Concepts',
    dueDate: '2024-01-05',
    points: 75,
    status: 'submitted',
    type: 'quiz'
  }
];

export const mockGrades: Grade[] = [
  {
    id: '1',
    assignment: 'Programming Assignment #1',
    score: 95,
    total: 100,
    percentage: 95,
    letterGrade: 'A',
    submittedDate: '2024-01-01'
  },
  {
    id: '2',
    assignment: 'Quiz: Introduction to Programming',
    score: 68,
    total: 75,
    percentage: 90.7,
    letterGrade: 'A-',
    submittedDate: '2024-01-05'
  },
  {
    id: '3',
    assignment: 'Programming Assignment #2',
    score: 88,
    total: 100,
    percentage: 88,
    letterGrade: 'B+',
    submittedDate: '2024-01-08'
  },
  {
    id: '4',
    assignment: 'Discussion: Algorithm Complexity',
    score: 45,
    total: 50,
    percentage: 90,
    letterGrade: 'A-',
    submittedDate: '2024-01-10'
  }
];