import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon, ChartBarIcon, ArrowPathIcon, TableCellsIcon } from '@heroicons/react/24/outline/index.js'

const features = [
  {
    name: 'Smart Search',
    description: 'Find datasets using natural language search across multiple sources including Kaggle and Google Dataset Search.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Dataset Analytics',
    description: 'Get instant insights about dataset size, columns, last updated date, and quality metrics.',
    icon: ChartBarIcon,
  },
  {
    name: 'Real-time Updates',
    description: 'Stay up to date with the latest datasets and updates from various sources.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Compatibility Check',
    description: 'Check if datasets can be merged and analyze their compatibility before downloading.',
    icon: TableCellsIcon,
  },
]

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find the Perfect Dataset for Your Research
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nessa helps researchers and data scientists discover and evaluate datasets faster using AI-powered search across multiple sources.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/search"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Searching
            </Link>
            <Link to="/docs" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Faster Discovery</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to find the right data
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stop wasting time manually searching across different platforms. Let Nessa do the heavy lifting for you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 