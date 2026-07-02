import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Contact Information
          </h3>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>Email: <span className="text-slate-800 dark:text-slate-300">info@drivesphere.com</span></p>
            <p>Phone: <span className="text-slate-800 dark:text-slate-300">+880 1234 567890</span></p>
            <p>Address: <span className="text-slate-800 dark:text-slate-300">Gouripur, Mymensingh, Bangladesh</span></p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore-cars" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                Explore Cars
              </Link>
            </li>
            <li>
              <Link href="/add-car" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                Add Car
              </Link>
            </li>
            <li>
              <Link href="/my-bookings" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                My Bookings
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-200/60 text-slate-700 hover:bg-[#e6bcf3] hover:text-white dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-[#e6bcf3]  transition-all duration-200"
            >
              <FaFacebookF size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-200/60 text-slate-700 hover:bg-[#e6bcf3] hover:text-white dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-[#e6bcf3]  transition-all duration-200"
            >
              <FaTwitter size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-200/60 text-slate-700 hover:bg-[#e6bcf3] hover:text-white dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-[#e6bcf3]  transition-all duration-200"
            >
              <FaLinkedinIn size={18} /> 
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-200/60 text-slate-700 hover:bg-[#e6bcf3] hover:text-white dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-[#e6bcf3]  transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-slate-200 dark:border-slate-900 pt-6 text-center text-slate-500 dark:text-slate-500 text-sm">
        © {new Date().getFullYear()} DriveSphere. All rights reserved.
      </div>
    </footer>
  );
}