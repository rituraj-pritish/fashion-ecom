import React from 'react';

import Modal from '../layout/modal/Modal';
import { MailListContainer } from './MailListModal.styles';

const MailListModal = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <MailListContainer>
        <img src={require('../../assets/images/maillist.jpg')} alt='items' />
        <div>
          <h2>Join our mailing list</h2>
          <p>
            Sign Up for exclusive updates, new arrivals & insider-only discounts
          </p>
          <form>
            <input type='text' placeholder='enter your email' />
            <button>Submit</button>
          </form>
        </div>
      </MailListContainer>
    </Modal>
  );
};

export default MailListModal;
