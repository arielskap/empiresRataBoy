import React from 'react';
import { animated } from 'react-spring';
import { useFetch } from '../hooks';
import { useFade } from '../animations';
import { CardAlianza, Modal, MessageErrorFetch, SEO } from '../components';

export default () => {
  const { fade } = useFade();
  const { open, setOpen, errorResponse, data } = useFetch('5edebdbd655d87580c467674');

  return (
    <>
      <SEO title='Alianzas' />
      <animated.main style={fade}>
        <h2 className='text-center mb-4 text-2xl font-bold'>
          Alianzas
          <br />
          que Conforman la Red
        </h2>
        <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mx-2 lg:mx-6'>
          {data && data.map((alianza) => {
            const { id } = alianza;
            return (
              <div key={id}>
                <CardAlianza json={alianza} />
              </div>
            );
          })}
        </div>
      </animated.main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la de Alianzas</MessageErrorFetch>
      </Modal>
    </>
  );
};

