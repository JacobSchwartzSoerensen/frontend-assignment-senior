// TODO: Complete the useFetch hook to handle API calls and return data, loading, and error states

import { useEffect, useState } from 'react';
import { fetchMockUsers, User } from '../services/userAPI';

interface PageLinks {
  prev?: string;
  next?: string;
}

function parseLink(linkHeader: string): PageLinks {
  const pageLinks: PageLinks = {};
  const links = linkHeader.split(',');
  
  links.forEach(link => {
    const matches = link.match(/<([^>]+)>; rel="([^"]+)"/);
    const url = matches?.[1];
    const type = matches?.[2];

    if ((type === 'next' || type === 'prev') && url)
      pageLinks[type] = url;
  });

  return pageLinks;
}

export const useFetch = (page: number, searchTerm?: string) => {
  const [data, setData] = useState<User[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);

    fetchMockUsers({ page, searchTerm })
      .then(resp => {
        if (!resp.length)
          throw Error('No users found!');

        setIsLoading(false);
        setData(resp);
        setError(undefined);
      })
      .catch(error => {
        setIsLoading(false);
        setData([]);
        setError(error.message)
      });
  }, [page, searchTerm]);

  return { data, isLoading, error };
};