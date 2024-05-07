import React from 'react';

const Panel = () => {
  return (
    <div>
      <div className='list-wrap'>
        <div className='on-going frame-wrap'>
          <div className='sub-title'>进行中</div>
        </div>
        <div className='on-todo frame-wrap'>
          <div className='sub-title'>未开始</div>
        </div>
        <div className='on-done frame-wrap'>
          <div className='sub-title'>已完成</div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
