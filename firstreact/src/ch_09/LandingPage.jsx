import React, { useState } from 'react';
import Toolbar from './ToolBar';
;

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
            <div style={{ padding: 16 }}>랜딩 페이지</div>
        </div>
    );
}

export default LandingPage;
