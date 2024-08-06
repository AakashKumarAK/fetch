import { useState, useEffect } from 'react';
import axios from 'axios';
const UserList = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/usrs')
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <ul>
    {users.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
  );
};
export default UserList;
