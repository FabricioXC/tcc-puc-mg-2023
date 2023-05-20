import React, { useState } from "react";
import styles from "../../Modal/Modal.module.css";
import Modal from "react-modal";
import { ModalCloseIcon } from "../Icons";
import Router from "next/router";
import { IconContainer, Message, MessageIconContainer } from "./styles";
import { GenericButton } from "../../Button/GenButton/styles";

Modal.setAppElement("#__next");

interface StandardModalProps {
  msg?: string;
  title: string;
  icon?: any;
  showModal: any;
  setShowModal: any;
  btnMessage?: string;
  btnRoute?: string;
}

const StandardModal: React.FC<StandardModalProps> = ({
  msg,
  title,
  icon,
  showModal,
  setShowModal,
  btnMessage = "Fechar",
  btnRoute,
}) => {
  // const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
    btnRoute && Router.push(btnRoute);
  }

  return (
    <div className="main-modal">
      {/* <button onClick={toggleModal}>Open modal</button> */}

      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={showModal}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={
          icon && msg
            ? `${styles["mymodal"]} ${styles["mymodalImgIcon"]}`
            : `${styles["mymodal"]}`
        }
        overlayClassName={`${styles["myoverlay"]}`}
        closeTimeoutMS={500}
      >
        <div
          style={{
            width: "100%",
            fontFamily: "Roboto",
            display: `flex`,
            flexDirection: `row`,
            height: `72px`,
            fontStyle: "normal",
            fontWeight: 500,
            color: "#171717",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          <div
            style={{
              width: `85%`,
              paddingLeft: `5%`,
              height: "48px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: `10%`,
              display: `flex`,
              flexFlow: `row`,
              justifyContent: `flex-end`,
              height: "24px",

              // border: "1px solid black",
            }}
          >
            <div style={{ cursor: "pointer" }} onClick={toggleModal}>
              {ModalCloseIcon}
            </div>
          </div>
        </div>
        <MessageIconContainer msg={msg} icon={icon}>
          <>
            {msg && <Message>{msg}</Message>}
            {icon && <IconContainer>{icon}</IconContainer>}
          </>
        </MessageIconContainer>
        <div
          style={{
            height: `100px`,
            width: `476px`,
            // background: `blue`,

            // paddingTop: `${icon ? "36px" : "48px"}`,
            paddingTop: `36px`,
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `right`,
            alignContent: `baseline`,
          }}
        >
          <GenericButton type={"button"} onClick={toggleModal}>
            {" "}
            {btnMessage}
          </GenericButton>
        </div>
      </Modal>
    </div>
  );
};
export default StandardModal;
