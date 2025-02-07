import { useState } from "react";
import { Dumbbell, LogOut, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function MobileSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold">FitTrack</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="py-4 lg:hidden">
            <div className="flex flex-col space-y-2">
              <Link to="/food">
                <button className="justify-start w-full">
                  Food
                </button>
              </Link>
              <Link to="/exercise">
                <button className="justify-start w-full">
                  Exercise
                </button>
              </Link>
              <Link to="/login">
                <button className="justify-start w-full">
                  Log In
                </button>
              </Link>
              <Link to="/login">
              <button
              onClick={() => logout()}
              className="flex items-center p-2 text-white bg-indigo-600 rounded justify-self-center font-mediumw-full hover:bg-indigo-800"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Sign Out
            </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}