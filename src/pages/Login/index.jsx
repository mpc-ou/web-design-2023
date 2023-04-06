import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import styles from './Login.module.css';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  const handleLoginGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const uid = localStorage.getItem('uid') || null;
    if (uid != null || uid != undefined) {
      navigate('/');
    }
  }, [user?.uid]);

  return (
    <div className={styles.wrapper}>
      <button onClick={handleLoginGoogle}>Login with Google</button>
    </div>
  );
}

export default Login;
