import { useEffect, useState } from 'react';

export default function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.setIsOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id.handleStatusChange);
        return () => {
            ServerAPI.subscribeUserStatus(props.user.id.handleStatusChange);
        };
    });

    return isOnline;
}
