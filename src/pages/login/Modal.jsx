import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as data from 'sample_data.js';
import { UserContext } from '../../contexts/Contexts.jsx';
import { checkForm } from '../../helper_functions/helper_functions';
import { DateTimePicker } from '@mui/x-date-pickers';
import styles from './modal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function BasicModal ({ modal, setModal }) {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => { setModal(false); }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <ul className={styles.list}>
            <li>Users can create events and invite their friends</li>
            <li>Users can see their friends' events and RSVP</li>
            <li>When a user RSVPs and attends an event, their score increases by one</li>
            <li>When a user RSVPs but flakes, their score decreases by one</li>
            <li>Hosting an event is the same as attending</li>
          </ul>
          <button
            className={styles.btn}
            onClick={() => { setModal(false); }}
          >X</button>
        </Box>
      </Modal>
    </div>
  );
}
