import React, { useState, useEffect } from "react"

export default function Counter(props){
    // const [count, setCount] = count(0)
    useEffect(() => {
        // 브라우저 API
        document.title = `총 ${count} 번 클릭했습니다.`;
    })
    const [isOnline, setIsOnline] = useState(null)

    function handleStatusChange(status){
        setIsOnline(status.setIsOnline)
    }

    // compnentDidMount, componentDidUpdate와 비슷학 작동함
    useEffect(() => {
        // 브라우저 API
        // document.title = `총 ${count} 번 클릭했습니다.`;
        ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
        }
    })

    if(isOnline == null){
        return '대기 중...'
    }
    return isOnline ? '온라인' : '오프라인'
}