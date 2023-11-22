import { useState } from 'react';

import { Modal, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const NewAnnouncementModal = ({ onSubmit }) => {
    const [opened, setOpened] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const submitClicked = () => {
        onSubmit({ title, message, isConfirmed });
        setOpened(false);
        clearModal()
    };

    const clearModal = () => {
        setTitle('');
        setMessage('');
        setIsConfirmed(false);
    };

    return (
        <div>
            <Modal opened={opened} onClose={() => setOpened(false)} size='814px' withCloseButton={false}>
                <div className='modal-container'>
                    <div className='modal-inner-container'>
                        
                        <div className='modal-title-container'>
                            <h3 className='modal-title'>Announcement details</h3>
                        </div>

                        <div className='modal-announcement-title-container'>
                            <div className='modal-announcement-title-inner-container'>
                                <label className='modal-announcement-title-label'>Title</label>
                                <input className='modal-title-input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                        </div>

                        <div className='modal-announcement-message-container'>
                            <label className='modal-announcement-title-label'>Message</label>
                            <textarea className='modal-message-input' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>

                        <div className='modal-announcement-confirmation-container'>
                            <input id='confirmation-checkbox' type='checkbox' checked={isConfirmed} onChange={(e) => setIsConfirmed(e.target.checked)} />
                            <label htmlFor='confirmation-checkbox' className='modal-announcement-confirmation-label'>Announcement is confirmed</label>
                        </div>
    
                        <div className='modal-footer'>
                            <Button className='modal-save-button' onClick={submitClicked}>Save</Button>
                            <Button className='modal-cancel-button' onClick={() => setOpened(false)} variant='outline' color='blue'>Cancel</Button>
                        </div>
                    </div>
                </div>
            </Modal>

            <div>
                <Button className='add-button' onClick={() => setOpened(true)}><span className='add-button-icon'><FontAwesomeIcon icon={faPlus} /></span> Add</Button>
            </div>
        </div>
    );
}

export default NewAnnouncementModal;