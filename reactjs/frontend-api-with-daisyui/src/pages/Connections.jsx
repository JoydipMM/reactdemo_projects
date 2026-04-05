import React, { useEffect, useState } from 'react'
import UserConnectionCard from '../components/UserConnectionCard'
import { API_BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Connections = () => {
  const authUser = useSelector((store) => store.auth.user);
  const navigate = useNavigate();

  const [connectedUsers, setConnectedUsers] = useState(null);
  const [newUsersToConnect, setNewUsersToConnect] = useState(null);


  const ConnectedUsersAPI = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/request/connected-list`, { withCredentials: true });
      //console.log(response.data.users);
      setConnectedUsers(response?.data?.users)
    } catch (error) {
      if (error.response.status === 401) {
        navigate('/login');
      }
    }
  }


  const NewUSerToConnectAPI = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/new-connections`, { withCredentials: true });
      //console.log(response.data.users);
      setNewUsersToConnect(response?.data?.users)
    } catch (error) {
      if (error.response.status === 401) {
        navigate('/login');
      }
    }
  }

  const newConnectionSendEvent = async (data) => {
    console.log(data)
    const touserid = data.touserid;
    const status = data.status;
    
    const res = await axios.post(`${API_BASE_URL}/request/send/${status}/${touserid}`, {}, { withCredentials: true });
    if(res.status === 200) {
      NewUSerToConnectAPI();
    }
  }


  useEffect(() => {
    if (authUser) {
      ConnectedUsersAPI();
      NewUSerToConnectAPI();
    }
  }, [authUser])

  return (
    <div className="max-w-xl mx-auto space-y-6">

      <div className='w-full relative mb-5'>
        {/* <h3 className="text-2xl font-bold mb-3">Your Connections</h3> */}
        {connectedUsers?.map(user => (
          <UserConnectionCard 
          key={user._id} 
          user={user} 
          extraOption={true}
           />
        ))}
      </div>


      <div className='w-full relative mb-5'>
        <h3 className="text-2xl font-bold mb-3">Send Request</h3>
        {newUsersToConnect?.map(user => (
          <UserConnectionCard 
          key={user._id} 
          user={user} 
          showSend={true} 
          showIgnore={true} 
          extraOption={false} 
          onClick={newConnectionSendEvent} />
        ))}
      </div>



    </div>
  )
}

export default Connections
