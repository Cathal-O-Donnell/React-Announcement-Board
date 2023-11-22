import React from "react";

import AnnouncementConfirmation from './AnnouncementConfirmation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const AnnouncementCard = (props) => {
    return (
        <div className='announcement-card'>
            <div className='announcement-card-top'>
                <div className='announcement-card-title-container'>
                    <p className='announcement-card-title'>{props.announcement.title}</p>
                    <p className='announcement-card-date'>{props.announcement.date}</p>
                </div>

                <div className='announcement-card-options-outer-container'>
                    <div className='announcement-card-options-inner-container'>
                        <span className='announcement-card-options'><FontAwesomeIcon icon={faEllipsisVertical} /></span>
                    </div>
                </div>
            </div>
            <div className='announcement-card-middle'>
                <div className='announcement-card-user-container'>
                    <div className='announcement-card-user-image-container'>
                    </div>

                    <div className='announcement-card-name-container'>
                        <p className='announcement-card-name'>{props.announcement.name}</p>
                        <p className='announcement-card-role'>{props.announcement.role}</p>
                    </div>
                </div>
                <p className='announcement-card-message'>{props.announcement.message}</p>
            </div>
            <div className='announcement-card-confirmation-container'>
                <AnnouncementConfirmation isConfirmed={props.announcement.isConfirmed}></AnnouncementConfirmation>
            </div>
        </div>
    );
};

export default AnnouncementCard;