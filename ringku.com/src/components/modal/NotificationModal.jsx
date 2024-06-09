import React from 'react';
import { useSelector } from 'react-redux';
import successImg from "../../assets/images/success-tick.png";
import errorImg from "../../assets/images/error-icon.png";
export default function NotificationModal({ show, onClose, title, body }) {
    const notificationState = useSelector((state) => state.notification);

    return (
        <>
            {show && (
                <div className={"success-modal-container"}>
                    <div className="modal-overlay">
                        <div className="success-modal-wrapper">
                            <div className={"success-modal"}>
                                {notificationState.modal.type === "error" ? (
                                    <div className={"success-modal-img"}>
                                        <img src={errorImg} width={70} height={70} />
                                    </div>
                                ) : (
                                    <div className={"success-modal-img"}>
                                        <img src={successImg} width={70} height={70} />
                                    </div>
                                )}
                                <div className={"success-modal-text"}>
                                    <p className={"modal-title"}>{title}</p>
                                    <p className={"modal-body"}>{body}</p>
                                    <div className={"success-modal-btn"}>
                                        <button onClick={onClose} className={"continue-btn"}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
