import React, { useState } from 'react'
import Modal from 'react-modal';

export default function Modal({message}) {
    const [modalOpen, setModalOpen]=useState(false);

  return <Modal
  isOpen={modalOpen}
  onRequestClose={()=>setModalOpen(false)}
  ></Modal>
}
