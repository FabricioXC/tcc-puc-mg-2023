import React, { useState } from "react";
import styles from "../../Loading/Loading.module.css";

import Modal from "react-modal";
import LoadingSpin from "../LoadingStandardSpinning";

Modal.setAppElement("#__next");

interface LoadingSpinnerModalProps {
  showModal: any;
}

const LoadingModalSpinner: React.FC<LoadingSpinnerModalProps> = ({
  showModal,
}) => {
  // const [showModal, setShowModal] = useState(false);

  //   function toggleModal() {
  //     setShowModal(!showModal);
  //   }

  return (
    <div className="main-modal">
      {/* <button onClick={toggleModal}>Open modal</button> */}

      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={showModal}
        // onRequestClose={showModal}
        contentLabel="My dialog"
        className={`${styles["mymodal"]}`}
        overlayClassName={`${styles["myoverlay"]}`}
        closeTimeoutMS={500}
      >
        <LoadingSpin
          size={0.5}
          color="#e85082"
          top="2em"
          bottom="1em"
          visible={true}
        />
      </Modal>
    </div>
  );
};
export default LoadingModalSpinner;
