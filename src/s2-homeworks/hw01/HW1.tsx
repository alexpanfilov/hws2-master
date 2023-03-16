import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import john from './john.png'
import ygritte from './ygritte.png'
import './HW1.css'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: UserPropsType,
    message: MessagePropsType
}

type UserPropsType = {
    avatar: string,
    name: string
}

type MessagePropsType = {
    text: string,
    time: string
}
// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: ygritte, // можно менять
        name: 'Ygritte', // можно менять
    },
    message: {
        text: 'You Know Nothing, Jon Snow!', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: john, // можно менять
        name: 'John Snow',  // можно менять
    },
    message: {
        text: 'I know that I know nothing...', // можно менять
        time: '22:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
