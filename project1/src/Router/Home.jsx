// App.jsx
import React from 'react';
import './Home.css'
import { Card, CardContent } from '../Components/ui/card';
import {Button } from '../Components/ui/button';
import {
  CalendarDays,
  ClipboardList,
  FileText,
  BookOpen,
  UserCheck,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const dashboardItems = [
  { label: 'Info Desk', icon: ClipboardList },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Circular', icon: FileText },
  { label: 'Attendance', icon: UserCheck },
  { label: 'Fee', icon: FileText },
  { label: 'Home Work', icon: BookOpen },
  { label: 'My Editor', icon: FileText },
  { label: 'Queries', icon: HelpCircle },
];

export default function Home() {
  return (
    <div className="app-container">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center text-white font-bold">
            Hi
          </div>
          <span className="text-xl font-semibold">Student Name</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-600">Profile: My Profile</span>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Logout</Button>
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {dashboardItems.map(({ label, icon: Icon }, i) => (
          <Card key={i} className="text-center cursor-pointer hover:shadow-xl transition">
            <CardContent className="flex flex-col items-center py-6">
              <Icon className="w-8 h-8 mb-2 text-blue-600" />
              <p className="font-medium">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex items-center space-x-4 text-purple-700">
        <HelpCircle className="w-6 h-6" />
        <p className="font-medium">Doubt</p>
      </div>
    </div>
  );
}