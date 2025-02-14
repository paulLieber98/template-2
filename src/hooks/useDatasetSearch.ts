import { useQuery } from '@tanstack/react-query'
import { searchDatasets } from '../services/api'

export function useDatasetSearch(query: string) {
  return useQuery({
    queryKey: ['datasets', query],
    queryFn: () => searchDatasets(query),
    enabled: !!query,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
} 