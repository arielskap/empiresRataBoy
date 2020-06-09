import React from 'react';
import useFetch from '../hooks/useFetch';
import { CardAlianza, Modal, MessageErrorFetch, SEO } from '../components';
import { animateCSS } from '../funciones';

export default () => {
  const { open, setOpen, errorResponse, data } = useFetch('5edebdbd655d87580c467674');

  const handleCloseModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
      setOpen(false);
    });
  };

  return (
    <>
      <SEO title='Alianzas' />
      <div className='animated fadeIn faster'>
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
      </div>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <MessageErrorFetch errorResponse={errorResponse} handleCloseModal={handleCloseModal}>Traer la de Alianzas</MessageErrorFetch>
      </Modal>
    </>
  );
};

