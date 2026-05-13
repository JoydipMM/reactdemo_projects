import React, { useState, useEffect } from 'react'
import { userService } from '@/features/users/services/user.service';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUsers= async () => {
        try {
            setLoading(true);
            setError("");
            const response = await userService.getUsers();
            setUsers(response);
        }catch (err) {
            console.log(err);
            setError("Failed to fetch users");
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
    <div>
       {users.map((user)=>(
      <div key={user.id} className="border p-4 m-2">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    ))}
    </div>
    )
}

export default Users
