import  { useState } from 'react';

const Login = () => {
  // State untuk menyimpan nilai inputan username dan password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi untuk menangani perubahan nilai inputan username
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Fungsi untuk menangani perubahan nilai inputan password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Fungsi untuk menangani proses login
  const handleLogin = () => {
    // Lakukan validasi username dan password
    if (username === 'user' && password === 'password') {
      alert('Login berhasil!');
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
