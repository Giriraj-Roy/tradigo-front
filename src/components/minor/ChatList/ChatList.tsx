import React, { useEffect, useRef, useState } from 'react'
import styles from './ChatList.module.css'
import send from '../../../assets/images/send.png'
import { AskGroq } from '../../../apis/PromptApis'
import useAppContext from '../../../hooks/useAppContext'
import { useRegex } from '../../../hooks/useRegex'


const ChatList = () => {
    const [prompt, setPrompt] = useState<string>("");
    const {chatData, setChatData} = useAppContext();
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatData]);


    const handlePrompt = async ()=>{
        try{
            if(prompt===""){
                alert("Please enter a message");
            }
            else{
                setChatData(prevChatData => [...prevChatData, prompt])
                
                const response = await AskGroq(prompt)
                if(typeof(response)=== typeof("")){
                    const result = useRegex(response || "")
                    
                    setChatData(prevChatData => [...prevChatData, result || "Please Try Again"])
                }    
    
                setPrompt("");
            }

        }catch(e){
            console.error(e);            
        }
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.shiftKey) {
            event.preventDefault(); 
            handlePrompt();
        }
    };

  return (
    <div>
        <div className={styles.head}> Being GroQ ! </div>
        <div className={styles.chatBody}>
            {
                chatData?.map((ele,index)=>{
                    return (
                        <div key={index} className={`${index%2==0 ? styles.chatLeft : styles.chatRight}`}>
                            {index===chatData.length-1 && <div ref={chatEndRef} /> }
                            {index%2==0 
                                ? <div dangerouslySetInnerHTML={{ __html: ele }} />
                                : ele
                            }
                        </div>
                    )
                })
            }
        </div>
        <div style={{display: "flex", marginTop: "0rem"}} >
            <textarea
                value={prompt}
                onChange={(e)=>setPrompt(e.target.value)}
                className={styles.prompt}
                placeholder={"Type your message..."}
                onKeyDown={(e)=>handleKeyDown(e)}
            />
            <div className={styles.send} onClick={()=>handlePrompt()} >
                {/* Send */}
                <img  src={send} alt={`Send`}  loading='lazy' width={30} height={30} />
                <span style={{fontSize: "0.5rem"}}>Shift+Enter</span>
            </div>
        </div>

    </div>
  )
}

export default ChatList