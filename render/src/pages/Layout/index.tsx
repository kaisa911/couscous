import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.less';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const leftClassName = () => {
    return open ? 'left open' : 'left';
  };
  const toggleOpen = () => {
    setOpen(!open);
  };
  const backToHome = () => {
    navigate('/');
  };

  return (
    <div className='layout-wrap'>
      <div className={leftClassName()}>
        <div>
          <div className='logo' onClick={backToHome}>
            Logo
          </div>
          <div className='menu-wrap'>
            <div className='menu-item'>
              <Link to='/todos'>TODOs</Link>
            </div>
            <div className='menu-item'>
              <Link to='/panel'>看板</Link>
            </div>
            <div className='menu-item'>笔记</div>
            <div className='menu-item'>知识库</div>
          </div>
        </div>
        <div className='open-btn' onClick={toggleOpen}>
          {open ? '<<' : `>>`}
        </div>
      </div>
      <div className='right'>{children}</div>
    </div>
  );
};

export default Layout;
