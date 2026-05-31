import React from 'react';
import { useUsers } from '@/features/user';

function UserList() {

  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch
  } = useUsers();

  return (
    <div>

      <h4>User List Component</h4>

      <button
        onClick={refetch}
        disabled={isLoading}
      >
        {isLoading ? "Reloading..." : "Reload Users"}
      </button>

      {isLoading && <div>Loading...</div>}

      {isError && <div>{error.message}</div>}
      <ul>
        {
          users?.users?.map((user) => (
            <li key={user.id}>
              {user.name && <>{user.name}</>}
              {user.firstName && <>
                {user.firstName} {user.lastName}
              </>}
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default UserList;