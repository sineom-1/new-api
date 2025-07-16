import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/User/index.js';
import LoginForm from '../../components/auth/LoginForm.js';

const Home = () => {
  const navigate = useNavigate();
  const [userState] = useContext(UserContext);

  useEffect(() => {
    // 如果用户已经登录，重定向到控制台
    if (userState.user) {
      navigate('/console');
    }
  }, [userState.user, navigate]);

  // 如果用户已经登录，显示加载状态
  if (userState.user) {
    return null;
  }

  return <LoginForm />;
};

export default Home;

