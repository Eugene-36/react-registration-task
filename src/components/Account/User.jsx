import React from 'react';

import { useSelector } from 'react-redux';

const User = () => {
  // console.log(props);
  const currentUser = useSelector((state) => state.user);

  console.log('currentUser', currentUser);
  return (
    <h1 className='loginContainer'>
      {currentUser.length ? currentUser[0]?.login : 'Waiting for your Login'}
    </h1>
  );
};

export default User;
