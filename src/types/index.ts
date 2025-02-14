export interface Dataset {
  id: string
  title: string
  description: string
  source: string
  lastUpdated: string
  size: string
  format: string
  columns: number
  rows: number
  tags?: string[]
  license?: string
  citation?: string
  columnInfo?: {
    name: string
    type: string
    description: string
    nullPercentage: number
  }[]
}

export interface KaggleDataset {
  ref: string
  title: string
  size: number
  lastUpdated: string
  downloadCount: number
  voteCount: number
  usabilityRating: number
}

export interface GoogleDataset {
  url: string
  name: string
  description: string
  provider: string
  datePublished: string
} 