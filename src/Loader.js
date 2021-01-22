import React from 'react';
import Loading from '../src/wave-loader.gif';
import { CardImg } from 'shards-react';

export default function Loader() {
  return (
    <div className='mx-auto'>
      <CardImg
        style={{ maxWidth: '300px' }}
        className='img-fluid rounded mx-auto d-block'
        src={Loading}
        alt='Loading...'
      />
    </div>
  );
}
