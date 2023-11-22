import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'

const AnnouncementConfirmation = ({ isConfirmed }) => {
  const confirmationBadgeClass = isConfirmed ? 'confirmation-badge-green' : 'confirmation-badge-red';
  const confirmationBadgeLabel = isConfirmed ? 'Confirmed' : 'Needs confirmation';
  const confirmationIcon = isConfirmed ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faExclamation} />;

  return (
    <div className={`confirmation-badge-container ${confirmationBadgeClass}`}>
      <div className='confirmation-badge-master'>
        <div className='confirmation-badge-alert-icon'>
          {confirmationIcon}
        </div>
        <span className='confirmation-badge-label'> {confirmationBadgeLabel}</span>
      </div>
    </div>
  );
};

export default AnnouncementConfirmation;