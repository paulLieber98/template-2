import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {
  ChartBarIcon,
  TableCellsIcon,
  CloudArrowDownIcon,
  DocumentDuplicateIcon,
  ClockIcon,
  TagIcon,
} from '@heroicons/react/24/outline/index.js'
import { Dataset } from '../types'

export default function DatasetDetails() {
  const { id } = useParams<{ id: string }>()
  const [dataset] = useState<Dataset>({
    id: '1',
    title: 'Smartphone Usage and Mental Health Dataset',
    description: 'A comprehensive dataset containing smartphone usage patterns and corresponding mental health indicators for young adults. The dataset includes various metrics such as screen time, app usage, sleep patterns, and self-reported mental health scores.',
    source: 'Kaggle',
    lastUpdated: '2024-03-10',
    size: '2.3GB',
    format: 'CSV',
    columns: 45,
    rows: 50000,
    tags: ['Mental Health', 'Smartphone Usage', 'Young Adults', 'Psychology'],
    license: 'CC BY-NC-SA 4.0',
    citation: 'Smith, J., et al. (2024). Smartphone Usage and Mental Health Dataset. Kaggle.',
    columnInfo: [
      {
        name: 'user_id',
        type: 'string',
        description: 'Unique identifier for each participant',
        nullPercentage: 0,
      },
      {
        name: 'screen_time_minutes',
        type: 'integer',
        description: 'Daily screen time in minutes',
        nullPercentage: 2.3,
      },
      // Add more columns as needed
    ],
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{dataset.title}</h1>
            <p className="mt-2 text-gray-600">{dataset.description}</p>
          </div>
          <button className="inline-flex items-center gap-x-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
            <CloudArrowDownIcon className="h-5 w-5" />
            Download Dataset
          </button>
        </div>

        {/* Quick Stats */}
        <dl className="mt-8 grid grid-cols-4 gap-6">
          <div className="rounded-lg border border-gray-200 p-4">
            <dt className="flex items-center gap-x-2 text-sm font-medium text-gray-500">
              <TableCellsIcon className="h-5 w-5 text-gray-400" />
              Size
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-gray-900">{dataset.size}</dd>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <dt className="flex items-center gap-x-2 text-sm font-medium text-gray-500">
              <ChartBarIcon className="h-5 w-5 text-gray-400" />
              Dimensions
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-gray-900">
              {dataset.rows.toLocaleString()} × {dataset.columns}
            </dd>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <dt className="flex items-center gap-x-2 text-sm font-medium text-gray-500">
              <ClockIcon className="h-5 w-5 text-gray-400" />
              Last Updated
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-gray-900">{dataset.lastUpdated}</dd>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <dt className="flex items-center gap-x-2 text-sm font-medium text-gray-500">
              <TagIcon className="h-5 w-5 text-gray-400" />
              Format
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-gray-900">{dataset.format}</dd>
          </div>
        </dl>
      </div>

      {/* Tags */}
      {dataset.tags && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Tags</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {dataset.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Schema */}
      {dataset.columnInfo && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Schema</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Column</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Null %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {dataset.columnInfo.map((column) => (
                  <tr key={column.name}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {column.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{column.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{column.description}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {column.nullPercentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Citation */}
      {dataset.citation && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Citation</h2>
          <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-start justify-between">
              <p className="text-sm text-gray-600">{dataset.citation}</p>
              <button
                type="button"
                className="ml-4 inline-flex items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <DocumentDuplicateIcon className="h-4 w-4 text-gray-400" />
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* License */}
      {dataset.license && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900">License</h2>
          <p className="mt-2 text-sm text-gray-600">{dataset.license}</p>
        </div>
      )}
    </div>
  )
} 