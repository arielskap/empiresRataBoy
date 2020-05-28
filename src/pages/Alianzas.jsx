import React, { useState, useEffect } from 'react';
import CardAlianza from '../components/CardAlianza';
import Modal from '../components/Modal';
import MessageErrorFetch from '../components/MessageErrorFetch';
import { fetchJson } from '../localFunction';
import { animateCSS } from '../funciones';

const Alianzas = () => {
  const [json, setJson] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);

  const handleCloseModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
      setOpen(false);
    });
  };

  useEffect(() => {
    fetchJson('alianzas', '5ed032f960775a568583d797', { setOpen, setErrorResponse, setJson });
  }, []);
  return (
    <>
      <div className='animated fadeIn faster'>
        <h2 className='text-center mb-4 text-2xl font-bold'>
          Alianzas
          <br />
          que Conforman la Red
        </h2>
        <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mx-2 lg:mx-6'>
          {json && json.map((alianza) => {
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

export default Alianzas;
