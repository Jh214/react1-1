import React, { isValidElement } from 'react';

export default function NumberList(props) {
    // const { numbers } = props;

    const numbers = [1, 2, 3, 4, 5];

    const todoLists = [
        { id: 1,
        todo: "할 일 1"
        },
        { id: 2,
            todo: "할 일 2"
        },
        { id: 3,
            todo: "할 일 3"
        },
        { id: 4,
        todo: "할 일 4"
        },
        { id: 5,
            todo: "할 일 5"
        }
    ]
    const listItems = numbers.map((number, index) => 
    <li key={index}>{number}</li>
);
// id 값을 key props로 사용한 경우
    const itemLists = todoLists.map((todoLists) => 
    <li key={todoLists.id}>{todoLists.todo}</li>
)
// index값을 key props로 사용한 경우
    const foos = todoLists.map((foo, index) => 
    <li key={index}>{foo.todo}</li>
)
// 포맷팅 된 문자열을 key props로 사용한 경우
    const bars = todoLists.map((bar) => 
    <li key={bar.id}>{bar.todo}</li>
)

    return (
    <>
    <ul>{listItems}</ul>;
    <ul>{itemLists}</ul>;
    <ul>{foos}</ul>;
    <ul>{bars}</ul>;
    </>
    )
}
