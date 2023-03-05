import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const projectID = 'b09fda89-83bd-4c7f-b47a-4e5f64f950a6';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('http://localhost:3000', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      console.log(err);
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <>
    
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div className=" mx-2 align-content:center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
            <Link to="/"><button className='button'><span>Home</span></button></Link>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
</>
  );
};

export default Modal;
