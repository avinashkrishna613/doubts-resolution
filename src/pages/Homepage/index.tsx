import React from 'react';
import UserProfile from '../../components/molecules/UserProfile';
import UpdateUser from '../../components/molecules/UpdateUser';
import UseCallbackComponent from '../../components/organizm/UseCallbackComponent';
import UseReducerComponent from '../../components/organizm/UseReducerComponent';
import UseMemoComponent from '../../components/organizm/UseMemoComponent';
import UseHooks from '../../components/organizm/UseHooks';


const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Use context</h2>
      <UserProfile />
      <UpdateUser />
      <h2>UseHooks</h2>
      <UseHooks />
      <h2>UseMemo</h2>
      <UseMemoComponent />
      <h2>UseCallback</h2>
      <UseCallbackComponent />
      <h2>UseReducer</h2>
      <UseReducerComponent />
    </div>
  );
};

export default HomePage;
