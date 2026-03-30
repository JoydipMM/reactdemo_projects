import React, { useEffect, useState } from 'react'
import UserConnectionCard from '../components/UserConnectionCard'
import { API_BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Connections = () => {
  const authUser = useSelector((store) => store.auth.user);
  const navigate = useNavigate();

  const [users, setUsers] = useState(null);


  const ConnectedUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/request/connected-list`, { withCredentials: true });
      console.log(response.data.users);
      setUsers(response?.data?.users)
    } catch (error) {
      if (error.response.status === 401) {
        navigate('/login');
      }
    }
  }

  useEffect(() => {
    if (authUser) {
      ConnectedUsers();
    }
  }, [authUser])

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {users?.map(user => (
        <UserConnectionCard key={user._id} user={user} />
      ))}
    </div>
  )
}

export default Connections
