import { useQuery } from '@tanstack/react-query';
import { fetchMarketData } from "../api/marketData";
import { SYMBOLS } from "../utils/constant";


const useMarketData = () => {
  const queryResult = useQuery({
    queryKey: ['marketData', SYMBOLS],
    queryFn: () => fetchMarketData(SYMBOLS),
    // Optional configuration
    retry: 2,
    refetchOnWindowFocus: false,

    // onSuccess: Called when the data fetching is successful
    onSuccess: (data) => {
      console.log('Market data fetched successfully:', data);
    },

    // onError: Called if the data fetching encounters an error
    onError: (error) => {
      console.error('Error fetching market data:', error);
    },

    // onSettled: Called when the query either succeeds or fails
    onSettled: () => {
      console.log('Query has settled (either success or error)');
    },
  });

  return {
    marketData: queryResult.data || [], 
    loading: queryResult.isLoading,
    error: queryResult.isError ? queryResult.error.message : null,
  };
};

export default useMarketData;
