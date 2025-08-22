import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CalendarDays,
  ClipboardList,
  FileText,
  BookOpen,
  UserCheck,
  HelpCircle,
  AlertCircle,
  Edit,
} from 'lucide-react';

const dashboardItems = [
  { label: 'Info Desk', icon: ClipboardList, path: '/infodesk' },
  { label: 'Calendar', icon: CalendarDays, path: '/calendar' },
  { label: 'Circular', icon: FileText, path: '/circular' },
  { label: 'Attendance', icon: UserCheck, path: '/attendance' },
  { label: 'Fee', icon: FileText, path: '/fee' },
  { label: 'Home Work', icon: BookOpen, path: '/homework' },
  { label: 'My Class', icon: Edit, path: '/editor' },
  { label: 'Queries', icon: HelpCircle, path: '/queries' },
  { label: 'Complaint', icon: AlertCircle, path: '/complaint' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Student Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dashboardItems.map(({ label, icon: Icon, path }, i) => (
          <div
            key={i}
            onClick={() => navigate(path)}
            className="cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all p-10 rounded-3xl flex flex-col items-center justify-center space-y-4 border border-gray-200 hover:border-blue-300"
          >
            <Icon className="w-10 h-10 text-blue-600" />
            <p className="text-xl font-semibold text-gray-800">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
