import { useEffect, useState } from "react";
// import { Button } from "./Button";
import { Dumbbell, Menu } from "lucide-react";
import { Link, useResolvedPath } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const pathname = useResolvedPath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell data-aos="flip-right" className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold">FitTrack</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 lg:flex">
            <div className="flex space-x-4">
              <Link to="/food">
                <button className={isActive("/food") ? " text-indigo-600" : ""}>
                  Food
                </button>
              </Link>
              <Link to="/exercise">
                <button className={isActive("/exercise") ? " text-indigo-600" : ""}>
                  Exercise
                </button>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button>Log In</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="p-2 text-white bg-indigo-600 rounded hover:bg-indigo-800">Sign Up</button>
              </Link>
            </div>
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
              <Link to="/signup">
                <button className="w-full p-1 text-white bg-indigo-600 rounded hover:bg-indigo-800">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}