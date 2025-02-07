import {
  LayoutDashboard,
  Target,
  Dumbbell,
  TrendingUp,
  Utensils,
  LogOut,
  User
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const location = useLocation();
  // const { signOut } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Goals', href: '/goals', icon: Target },
    { name: 'Exercises', href: '/exercises', icon: Dumbbell },
    { name: 'Progress', href: '/progress', icon: TrendingUp },
    { name: 'Nutrition', href: '/nutrition', icon: Utensils },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Dumbbell className="w-8 h-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">FitTrack</span>
        </div>
        <nav className="flex-1 px-2 mt-5 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                isActive(item.href)
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
            >
              <item.icon
                className={`${
                  isActive(item.href)
                    ? 'text-indigo-600'
                    : 'text-gray-400 group-hover:text-gray-500'
                } mr-3 flex-shrink-0 h-6 w-6`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div>
            <User className="inline-block text-gray-400 rounded-full h-9 w-9" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              User Profile
            </p>
            <button
              onClick={() => logout()}
              className="flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
