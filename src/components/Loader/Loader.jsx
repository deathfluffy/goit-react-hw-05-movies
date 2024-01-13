import React from 'react';
import { Hourglass } from 'react-loader-spinner'
export const Loader  = ({ className = '' }) => {
  return (
    (<Hourglass
     className={className}
     visible={true}
     height="80"
     width="80"
     ariaLabel="hourglass-loading"
     wrapperStyle={{}}
     wrapperClass=""
     colors={['#306cce', '#72a1ed']}
  />)
  );
};