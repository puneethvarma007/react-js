import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const Api = axios.get("http://localhost:3000/users");
    Api.then((res) => setData(res.data)).catch((err) => console.log(err));
  }, []);
  const deleteUser = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if(confirm){
    axios.delete(`http://localhost:3000/users/${id}`)
     .then((res) => navigate('/'))
     .catch((err) => console.log(err));
    }
     window.location.reload();

  }
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center bg-light ">
      <h2 className="">User List</h2>
        <div className=" rounded border shadow p-4 w-90">
            <div className="d-flex justify-content-end">
                <Link to='/create' className="btn btn-success "> Add New User</Link>
            </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id:</th>
                <th>Name:</th>
                <th>Email:</th>
                <th>Ph no:</th>
                <th>Website:</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <Link to={`/read/${user.id}`} className="btn btn-info me-2">Read</Link>
                    <Link to={`/update/${user.id}`} className="btn btn-primary me-2">Update</Link>
                    <button className="btn btn-danger" onClick={e=>deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
