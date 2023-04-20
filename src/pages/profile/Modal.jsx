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
  const { user, clubs, setClubs } = useContext(UserContext);
  const [valid, setValid] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [form, setForm] = useState({
    owner: user.user,
    title: '',
    city: '',
    state: '',
    neighborhood: '',
    type: '',
    description: '',
    members: [],
    date: selectedDate,
    location: '',
    photo: null
  });

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const handleDateChange = (id, eventDate) => {
    // console.log(id, eventDate.$d.toDateString(), eventDate.$d.toTimeString());
    setSelectedDate(eventDate);
    setForm({ ...form, [id]: eventDate.$d.toLocaleString('en-US', options) });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    // console.log('new event form', form);
  };

  const handleSubmit = (form) => {
    // console.log(form);
    const clubsCombined = [form, ...clubs];
    // console.log(clubsCombined);
    setClubs(clubsCombined);
    setModal(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => { setModal(false); }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <form autoComplete='off' className={styles.form}>
            {!valid && <div className={styles.valid}>Please fill out all fields.</div>}
            <input
              className='col-start-2 row-start-1'
              placeholder="Title"
              id='title'
              onChange={handleChange}
            />
            <input
              className={styles.city}
              placeholder="City"
              id='city'
              onChange={handleChange}
            />
            <input
              className={styles.state}
              placeholder="State"
              id='state'
              onChange={handleChange}
            />
            <input
              className={styles.neighborhood}
              placeholder="Neighborhood"
              id='neighborhood'
              onChange={handleChange}
            />
            <div className={styles.selectContainer}>
              <select onChange={handleChange} id="type" className={styles.type}>
                <option value="">Select Type</option>
                <option value="Sports">Sports</option>
                <option value="Social">Social</option>
                <option value="Date">Date</option>
                <option value="Gaming">Gaming</option>
              </select>
            </div>
            <textarea
              rows={2}
              className={styles.description}
              placeholder="Description"
              id='description'
              onChange={handleChange}
            />
            <DateTimePicker
              className={styles.date}
              label=""
              id="date"
              value={selectedDate}
              onChange={(eventDate) => { handleDateChange('date', eventDate); }}
            />
            <input
              className={styles.location}
              placeholder="Location"
              id='location'
              onChange={handleChange}
            />
            <button
              className={styles.btn}
              onClick={(e) => {
                e.preventDefault();
                if (!checkForm(form)) {
                  setValid(false);
                  return;
                }
                handleSubmit(form);
              }}
            >Create!</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
