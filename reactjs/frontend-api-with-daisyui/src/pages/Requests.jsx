import React, { useState, useEffect } from 'react'
import UserConnectionCard from '../components/UserConnectionCard'
import { API_BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Requests = () => {
  const authUser = useSelector((store) => store.auth.user);
  const navigate = useNavigate();

  const [ requestsList, setRequestsList ] = useState([]);

  const getRequestListAPI = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/request/get-request-list`, { withCredentials: true });
      //console.log(response.data.users);
      setRequestsList(response?.data?.users)
    } catch (error) {
      if (error.response.status === 401) {
        navigate('/login');
      }
    }
  }

  const getRequestEvent = async (data) => {
    const { status, requestid } = data;
    try{
      const res = await axios.post(`${API_BASE_URL}/request/received/${status}/${requestid}`, {}, { withCredentials: true });
      if(res.status === 200) {
        getRequestListAPI();
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if (authUser) {
      getRequestListAPI();
    }
  }, [authUser])

  return (
    <div className="max-w-xl mx-auto pb-10">
      <div className="flex items-center justify-between mb-8 px-2">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Friend Requests
          <div className="badge badge-primary badge-md">{requestsList.length}</div>
        </h1>
        {/* <button className="btn btn-ghost btn-sm text-primary">View Sent</button> */}
      </div>

      <div className="space-y-6">
        {requestsList.length > 0 ? (
          requestsList.map((data, index) => (
            <UserConnectionCard 
              key={index} 
              user={data.user} 
              showSend={false} 
              showAccept={true} 
              showRejected={true}
              requestid={data.requestid}
              onClick={getRequestEvent}
            />
          ))
        ) : (
          <div className="text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
            <div className="text-5xl mb-4">📬</div>
            <h3 className="text-xl font-medium">No pending requests</h3>
            <p className="text-base-content/60">When someone wants to connect, it'll show up here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Requests
