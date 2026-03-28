import { AnimatePresence, motion } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext.js'

function FeedbackList() {
    let { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Data Received Yet</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item, index) => (
    //             <FeedbackItem
    //                 key={item.id}
    //                 item={item}
    //                 handleDelete={handleDelete}
    //             />
    //         ))}
    //     </div>
    // )
}

export default FeedbackList
