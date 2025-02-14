import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Nessa</h3>
            <p className="mt-2 text-sm text-gray-600">
              AI-powered dataset discovery platform helping researchers and data scientists find the right data faster.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/docs" className="text-sm text-gray-600 hover:text-indigo-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-sm text-gray-600 hover:text-indigo-600">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-indigo-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Nessa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 