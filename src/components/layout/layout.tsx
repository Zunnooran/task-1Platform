import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/core-ui/container/container';
import SubContainer from 'components/core-ui/container/sub-container';

import ScrollToTop from 'helpers/scroll-to-top';

import WithSuspense from 'routes/with-suspense';

import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';

function Layout() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <div className='p-4'>
      <ScrollToTop />
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />
      <Container>
        <Header onMenuToggle={toggleSidebar} />
        <SubContainer>
          <WithSuspense>
            <Outlet />
          </WithSuspense>
        </SubContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
