import { useState } from "react";
function Message() {

    const handleRemove = (id) => {
        setmessage(message.filter((item) =>{        
            if(item.id === id){
            return false
        }
        return true
        }))

    }

    const [message, setmessage] = useState([
        {
            text: 'Привет',
            author: 'Admin',
            side: 'inbox',
            id: 1
        },
        {
            text: 'Здаров',
            author: 'User',
            side: 'outbox',
            id: 2
        },
        {
            text: 'Уйди',
            author: 'Admin',
            side: 'inbox',
            id: 3
        }
    ])




    return (
        <div>
            {
            message.map((item) =>{
                return(
                <div className={`row ${item.side !== 'inbox' ? 'justify-content-end' : ''}`}>
                    <div className="col-3">
                        <div className={item.side}>
                                {item.text}
                            <div>
                                {item.author}
                            </div>
                            <button onClick={() => handleRemove(item.id)}>
                                x
                            </button>
                        </div>
                    </div>
                </div>
                )
        
            })
            }
        </div>
    );
}

export default Message;