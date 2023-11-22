import React, { useState } from 'react';

import AnnouncementCard from './AnnouncementCard';
import NewAnnouncementModal from './NewAnnouncementModal';
import SearchBar from './SearchBar';

const Announcements = (props) => {
    const [announcements, setAnnouncements] = useState(props.announcements || []);
    const [searchTerm, setSearchTerm] = useState('');

    const searchTermChangeHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filterAnnouncements = () => {
        if (!searchTerm) {
            return announcements;
        }
        
        const searchTermLower = searchTerm.toLowerCase();

        return announcements.filter((announcement) =>
            announcement.title.toLowerCase().includes(searchTermLower) ||
            announcement.message.toLowerCase().includes(searchTermLower)
        );
    };

    const announcementItems = filterAnnouncements().map((announcement) => (
        <AnnouncementCard key={announcement.id} announcement={announcement} />
    ));

    const submitHandler = ({ title, message, isConfirmed }) => {
        const lastId = announcements.length > 0 ? announcements[announcements.length - 1].id : 0;

        const newAnnouncement = {
            id: lastId + 1,
            title,
            date: new Date().toLocaleString('en-US', { timeZone: 'UTC', hour12: false }),
            name: "Cathal O Donnell",
            role: "Production coordinator",
            message,
            isConfirmed
        };

        const updatedAnnouncements = [...announcements, newAnnouncement];
        setAnnouncements(updatedAnnouncements);
    };

    return (
        <>
            <div className='top-container'>
                <SearchBar onChangeSearchTerm={searchTermChangeHandler}></SearchBar>
                <NewAnnouncementModal onSubmit={submitHandler}></NewAnnouncementModal>
            </div>

            <div className='announcement-cards-container'>
                {announcementItems}
            </div>
        </>
    );
};

export default Announcements;