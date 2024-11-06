import { FC, useState } from "react";
import "./index.scss";
import { useFetch } from './hooks/useFetch';


const Task1: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data, isLoading, error } = useFetch(page, searchTerm);

  const hasPrev = page > 0;
  const hasNext = data && data.length === 10;
  
  const users = data?.map(user => (
    <li key={user.id}>{user.login}</li>
  )) || [];

  return (
    <div className="dashboard">
      {isLoading && (<p>Loading...</p>)}
      {error}
      <input
        type="text" value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        data-testid="search-input"
      />
      <ul>
        {users}
      </ul>
      <button disabled={!hasPrev} onClick={() => setPage(page - 1)}>Prev</button>
      <button disabled={!hasNext} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Task1;