import "./chat.css"
import io from "socket.io-client";
import { useState, useEffect } from "react";
// const socket = io("https://chat-api-prod.cyclic.app/");
const socket = io("http://localhost:5000/");

const Chat = () => {
    const [ isConnected, setIsConnected ] = useState(false);
    const [ participants, setParticipants ] = useState([]);
    const [ messageObjs, setMessagesObjs ] = useState([]);
    const [ nickname, setNickname ] = useState("");

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
            console.log(`CONNECTED TO CHAT API: ${socket.id}`);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
            console.log(`DISCONNECTED FROM CHAT API`)
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        }

    }, []);

    if (isConnected) {
        socket.on('recv-list', addParticipants);
        socket.on('recv-msg', addMsg);
    }

    function addMsg(recvdMsgObj) {
        // console.log(`YUP ADD MSG TRIGGERED...`)
        setMessagesObjs([ ...messageObjs, recvdMsgObj ]);
    }

    function addParticipants(participantsList) {
        // console.log(`SERVER PACKET: ${participantsList}`);
        setParticipants(participantsList);
    }

    function sendMsg() {
        const msgInput = document.getElementById('msg-input');
        socket.emit('send-msg', { msg: msgInput.value });
        addMsg({ sender: "You", msg: msgInput.value });
        msgInput.value = "";
    }

    function initializeClient() {
        const nicknameInput = document.getElementById("nickname-input");
        const blocker = document.getElementById("blocker");

        const nicknameInputVal = nicknameInput.value;

        if (nicknameInputVal === '') {
            console.log(`RETURNING FROM INIT FUNC`);
            return;
        }

        setNickname(nicknameInputVal);
        socket.emit("init", { nickname: nicknameInputVal });

        blocker.classList.add("hidden");

        nicknameInput.value = '';
    }

    return (
        <>
            <section id="chat-app">
                <div id="participants-view">
                    {
                        participants.map((participant, index) => {
                            return (
                                <div
                                    key={index}
                                    id="participant">
                                    <img
                                        src={`https://avatars.dicebear.com/api/micah/:${participant}.png?mouth[]=smile&eyes[]=smiling`}
                                        alt="user avatar"
                                    />
                                    <span id="name">{participant}</span>
                                </div>
                            );
                        })
                    }

                </div>
                <div id="chat">
                    <div id="blocker">
                        <input type="text" name="nickname" id="nickname-input"
                            placeholder="Nickname" />
                        <input type="button" id="say-hi-btn" value="SAY HI!" onClick={initializeClient} />
                    </div>
                    <div id="msg-view">
                        <div id="msg-wrapper">
                            {
                                messageObjs.map((messageObj, index) => {
                                    console.log(messageObj);
                                    return (
                                        <div key={index} className="msg">
                                            <span className="msg-sender">
                                                {messageObj.sender}
                                            </span>
                                            <div className="msg-content">
                                                {messageObj.msg}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div id="user-input">
                        <input type="text" name="msg" id="msg-input" />
                        <input type="button" value="SEND" id="send-btn"
                            onClick={sendMsg} />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Chat;