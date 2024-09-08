'use client'

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const AdminPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Example: Set credentials in cookies
    Cookies.set('credentials', 'your-auth-token', { expires: 1 }); // Expires in 1 day
    
    // Redirect to the protected studio route
    router.push('/studio');
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminPage;
