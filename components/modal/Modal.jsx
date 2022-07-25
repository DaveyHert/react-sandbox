import "./Modal.css";

function Modal({ children, toggleModal }) {
  return (
    <div className='modal-wrapper' onClick={toggleModal}>
      <div className='modal'>{children}</div>
    </div>
  );
}

export default Modal;
