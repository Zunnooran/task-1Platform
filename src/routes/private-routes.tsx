import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import Home from 'pages/home/home';
import ActiveUser from 'pages/user/active-user';
import User from 'pages/user/user';

function PrivateRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<Outlet />}>
        <Route index element={<User />} />
        <Route path='active' element={<ActiveUser />} />
        {/* <Route path='waiting-list' element={<WaitingList />} /> */}
      </Route>
      <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  );
}

export { PrivateRoutes };
