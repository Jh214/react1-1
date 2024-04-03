import React, { useState, useEffect } from 'react'; // useState와 useEffect를 React에서 가져옴
import Notification from './Notification';

const reservedNotifications = [
    {
        id: 1,
        message: '안녕하세요, 오늘 일정을 알려드립니다.',
    },
    {
        id: 2,
        message: '점심식사 시간입니다.',
    },
    {
        id: 3,
        message: '이제 곧 미팅이 시작됩니다.',
    },
];

function NotificationList() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setNotifications((prevNotifications) => {
                if (prevNotifications.length < reservedNotifications.length) {
                    const index = prevNotifications.length;
                    return [...prevNotifications, reservedNotifications[index]];
                } else {
                    clearInterval(timer);
                    return [];
                }
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            {notifications.map((notification) => (
                <Notification key={notification.id} id={notification.id} message={notification.message} />
            ))}
        </div>
    );
}

export default NotificationList;
