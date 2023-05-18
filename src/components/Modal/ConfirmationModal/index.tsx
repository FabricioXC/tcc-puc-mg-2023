import React, { useState } from "react";
import styles from "../../Modal/Modal.module.css";
import Modal from "react-modal";
import { ModalCloseIcon } from "../Icons";
import Router from "next/router";
import { IconContainer, Message, MessageIconContainer } from "./styles";
import {
  GenericButton,
  GenericCancelButton,
} from "../../Button/GenButton/styles";

Modal.setAppElement("#__next");

export type Modalconfig = {
  msg?: string;
  title: string;
  icon?: any;
  firstBtnMessage: string;
  secondBtnMessage: string;
  btnRoute?: string;
  actionFunction: any;
  actionFunctionParams: any;
  fontTitleSize?: string;
  fontMsgSize?: string;
};

interface ConfirmationModalProps {
  modalConfig: Modalconfig;
  showModal: any;
  setShowModal: any;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  modalConfig,
  showModal,
  setShowModal,
}) => {
  // const [showModal, setShowModal] = useState(false);

  const {
    actionFunction,
    firstBtnMessage,
    secondBtnMessage,
    title,
    btnRoute,
    icon,
    msg,
    actionFunctionParams,
  } = modalConfig;

  function toggleModal() {
    setShowModal(!showModal);
    btnRoute && Router.push(btnRoute);
  }

  const confirmation = () => {
    setShowModal(!showModal);
    actionFunction(actionFunctionParams[0], actionFunctionParams[1]);
  };

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
            fontFamily: "Roboto",
            display: `flex`,
            flexDirection: `row`,
            height: `72px`,
            fontStyle: "normal",
            fontWeight: 500,
            color: "#171717",
            fontSize: modalConfig?.fontTitleSize
              ? modalConfig?.fontTitleSize
              : "20px",
            lineHeight: "24px",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              width: `380px`,
              paddingLeft: `24px`,
              height: "48px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: `96px`,
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
        <MessageIconContainer
          msg={msg}
          icon={icon}
          style={{
            paddingBottom:
              title === "Você está excluindo uma agenda médica" ? "15px" : "0",
          }}
        >
          <>
            {msg && (
              <Message
                style={{
                  fontSize: modalConfig?.fontMsgSize
                    ? modalConfig?.fontMsgSize
                    : "17px",
                }}
              >
                {msg}
              </Message>
            )}
            {icon && <IconContainer>{icon}</IconContainer>}
          </>
        </MessageIconContainer>
        <div
          style={{
            height: `100px`,
            width: `476px`,
            paddingTop: `36px`,

            display: `flex`,
            flexDirection: `row`,
            justifyContent: `right`,
            alignContent: `baseline`,
          }}
        >
          <div style={{ marginRight: "8px" }}>
            <GenericCancelButton type={"button"} onClick={toggleModal}>
              {" "}
              {firstBtnMessage}
            </GenericCancelButton>
          </div>
          <GenericButton type={"button"} onClick={confirmation}>
            {" "}
            {secondBtnMessage}
          </GenericButton>
        </div>
      </Modal>
    </div>
  );
};
export default ConfirmationModal;
