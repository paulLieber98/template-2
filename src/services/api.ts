import axios from 'axios'
import { Dataset } from '../types'

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
})

// Google Custom Search configuration
// Create this at https://programmablesearchengine.google.com/
// Configure it to search across dataset repositories
const GOOGLE_CSE_ID = '017576662512468239146:omuauf_lfve'

// Mock data for development and fallback
const MOCK_DATASETS = [
  {
    id: '1',
    title: 'Weather Patterns Global Dataset 2023',
    description: 'Comprehensive weather data including temperature, precipitation, and atmospheric conditions across global locations',
    source: 'Kaggle',
    lastUpdated: '2024-02-13',
    size: '2.3GB',
    format: 'CSV',
    columns: 27,
    rows: 1259,
    tags: ['Weather', 'Climate', 'Global', 'Temperature', 'Precipitation'],
  },
  {
    id: '2',
    title: 'US Weather and Climate Data',
    description: 'Historical weather and climate statistics for United States regions, including temperature trends and extreme weather events',
    source: 'Google Dataset Search',
    lastUpdated: '2024-01-15',
    size: '15MB',
    format: 'CSV',
    columns: 45,
    rows: 10000,
    tags: ['Weather', 'USA', 'Climate Change', 'Historical Data'],
  },
  {
    id: '3',
    title: 'European Climate Assessment Dataset',
    description: 'Daily weather observations from meteorological stations throughout Europe, covering temperature, precipitation, and humidity',
    source: 'Kaggle',
    lastUpdated: '2024-02-01',
    size: '1.8GB',
    format: 'CSV',
    columns: 32,
    rows: 50000,
    tags: ['Europe', 'Climate', 'Weather', 'Daily Data'],
  }
]

export async function searchDatasets(query: string): Promise<Dataset[]> {
  try {
    console.log('Searching datasets with query:', query)
    
    const response = await api.get('/datasets', {
      params: { query }
    })

    if (!Array.isArray(response.data)) {
      console.error('Unexpected API response format:', response.data)
      return []
    }

    // Transform datasets into our format
    const datasets: Dataset[] = response.data.map((dataset: any): Dataset => ({
      id: dataset.ref,
      title: dataset.title,
      description: dataset.subtitle || dataset.description || '',
      source: 'Kaggle',
      lastUpdated: dataset.lastUpdated,
      size: formatBytes(dataset.totalBytes),
      format: Array.isArray(dataset.fileTypes) ? dataset.fileTypes.join(', ') : 'Unknown',
      columns: dataset.columns || 0,
      rows: dataset.totalRows || 0,
      tags: dataset.tags || [],
      license: dataset.license?.name,
      citation: `${dataset.ownerName} (${new Date().getFullYear()}). ${dataset.title}. Kaggle. https://www.kaggle.com/datasets/${dataset.ref}`,
    }))

    // Sort by last updated date
    return datasets.sort((a, b) => {
      const dateA = new Date(a.lastUpdated).getTime()
      const dateB = new Date(b.lastUpdated).getTime()
      return dateB - dateA
    })
  } catch (error) {
    console.error('Error searching datasets:', error)
    if (axios.isAxiosError(error)) {
      console.error('API Error Details:', {
        status: error.response?.status,
        data: error.response?.data,
      })
    }
    throw error
  }
}

function formatBytes(bytes: number): string {
  if (!bytes || bytes === 0) return 'Unknown'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

function extractKeywords(title: string, description: string): string[] {
  const text = `${title} ${description}`.toLowerCase()
  const commonWords = new Set(['and', 'or', 'the', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'])
  
  const words = text.match(/\b\w+\b/g) || []
  const keywords = [...new Set(words)]
    .filter(word => word.length > 2 && !commonWords.has(word))
    .slice(0, 5)
  
  return keywords.map(word => word.charAt(0).toUpperCase() + word.slice(1))
} 