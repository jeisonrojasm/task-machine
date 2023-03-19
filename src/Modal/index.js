import ReactDOM from 'react-dom';

import './Modal.css';


export const Modal = ({ children }) => {

    return ReactDOM.createPortal(
        <div className='background-modal'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}



