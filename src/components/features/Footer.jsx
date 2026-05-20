import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-2">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
       
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
          <p>Email: info@drivesphere.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Gouripur, Mymensingh, Bangladesh</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/explore-cars" className="hover:text-white transition">Explore Cars</Link>
            </li>
            <li>
              <Link href="/add-car" className="hover:text-white transition">Add Car</Link>
            </li>
            <li>
              <Link href="/my-bookings" className="hover:text-white transition">My Bookings</Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DriveSphere. All rights reserved.
      </div>
    </footer>
  );
}
