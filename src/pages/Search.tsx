import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline/index.js'
import { useDatasetSearch } from '../hooks/useDatasetSearch'
import { Dataset } from '../types'

export default function Search() {
  const [query, setQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const { data: datasets, isLoading, error } = useDatasetSearch(searchQuery)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(query)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    // Optionally implement debounced search here
  }

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-3xl">
        <form onSubmit={handleSearch} className="relative">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search datasets (e.g., 'mental health survey data')"
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Search
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
              Filters
            </button>
          </div>
        </form>
      </div>

      {isLoading ? (
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-2 text-sm text-gray-600">Searching datasets...</p>
        </div>
      ) : error ? (
        <div className="text-center text-sm text-red-600">
          An error occurred while searching datasets. Please try again.
          <p className="mt-1 text-xs text-gray-500">{error.toString()}</p>
        </div>
      ) : datasets?.length ? (
        <div className="space-y-6">
          {datasets.map((dataset: Dataset) => (
            <Link
              key={dataset.id}
              to={`/dataset/${dataset.id}`}
              className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:ring-1 hover:ring-indigo-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{dataset.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{dataset.description}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                  {dataset.source}
                </span>
              </div>
              
              <dl className="mt-4 grid grid-cols-4 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                  <dd className="mt-1 text-sm text-gray-900">{dataset.lastUpdated}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Size</dt>
                  <dd className="mt-1 text-sm text-gray-900">{dataset.size}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Format</dt>
                  <dd className="mt-1 text-sm text-gray-900">{dataset.format}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Dimensions</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {dataset.rows > 0 ? `${dataset.rows.toLocaleString()} rows × ${dataset.columns} columns` : 'Unknown'}
                  </dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center">
          <p className="text-sm text-gray-600">No datasets found matching "{searchQuery}"</p>
          <p className="mt-1 text-xs text-gray-500">Try adjusting your search terms or filters</p>
        </div>
      ) : null}
    </div>
  )
} 