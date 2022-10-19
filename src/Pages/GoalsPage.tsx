import './GoalsPage.css'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'

const GoalsPage = () => {
    return (
        
        <div className="container">
            <Modal />
            <Tabs />
            <div className="category-header">
                <h2>Personal development</h2>
                <button className='add-btn'>Add Goal +</button>
            </div>
            

            <div className="category-header">
                <h2>Interaction with customer</h2>
                <button className='add-btn'>Add Goal +</button>
            </div>
            
      </div>
    )
}

export default GoalsPage