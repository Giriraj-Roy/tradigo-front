import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ChatCTAProps {
    image: string;
    title: string; 
}

const ChatCTA : React.FC<ChatCTAProps> = ({image, title="Hello"}) => {
  return (
    <div style={{display: "flex"}}>
        <motion.img
            src={image}
            alt={title}
            width={30}
            height={30}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 180 }} 
            exit={{ opacity: 0, rotate: 360 }}
            transition={{ duration: 0.5 }}
        />
        <span style={{fontWeight : 600, margin:"0 0.5rem"}}>{title}</span>
    </div>
  )
}

export default ChatCTA