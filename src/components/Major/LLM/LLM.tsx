import { useState } from 'react'
import styles from './LLM.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import ChatList from '../../minor/ChatList/ChatList'
import cross from '../../../assets/images/cross.png'
import chat from '../../../assets/images/chat.png'
import ChatCTA from '../../minor/ChatCTA/ChatCTA'


const LLM = () => {
    const [chatOpen, setChatOpen] = useState<boolean>(false)
    return (
        <>
            <div className={styles.cta} onClick={()=>setChatOpen(!chatOpen)}>
                { chatOpen 
                    ?   <AnimatePresence><ChatCTA image={cross} title={"Close"} /></AnimatePresence>
                    :   <ChatCTA image={chat} title={"Ask Groq"} />
                }
            </div>
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: chatOpen ? 1 : 0, translateY: chatOpen ? 0 : 50 }}
                transition={{ duration: 0.5, ease:  'easeInOut'}}
                className={styles.chatbox}
                style={{display: chatOpen ? 'block' : 'none'}}
            >
                <ChatList/>
            </motion.div>
        </>
    )
}

export default LLM