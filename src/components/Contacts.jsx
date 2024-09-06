import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-container">
            <h1></h1>
            <div className="contact-info">
                <img src="https://sun9-60.userapi.com/impg/eTH-WMxa257fsYWDlFckOAiLrDOIOWc6L-77Iw/mX01-EubFFQ.jpg?size=1200x1600&quality=95&sign=292c399d021276549e5916a743df1483&type=album" alt="Контакт" className="contact-image" />
                <div className="contact-details">
                    <p>Я не кидал никого никогда<br></br>
Я говорил только "да" иногда<br></br>
Голодал иногда пропадал<br></br>
Безутешно рыдал не рыгал - потому что не пил<br></br></p>
                    <p>Телефон: +7 (999) 589-01-73</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
