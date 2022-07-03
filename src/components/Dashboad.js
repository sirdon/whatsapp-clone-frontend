import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider'
import OpenConversaion from './OpenConversaion'
import Sidebar from './Sidebar'

export default function Dashboad({ id }) {
    const { selectedConversation } = useConversations()
    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar id={id} />
            {selectedConversation && <OpenConversaion />}
        </div>
    )
}
