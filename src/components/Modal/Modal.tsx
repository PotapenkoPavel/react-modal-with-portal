import React, {FC, useMemo} from 'react';
import {createPortal} from "react-dom";

import './Modal.scss';
import Close from "components/Icons/Close/Close";

type Wrapper = {
    wrapperId: string
}
type ModalProps = {
    show: boolean
    onClose: () => void
} &  Partial<Wrapper> & React.PropsWithChildren
type ModalPortalProps = {} & Partial<Wrapper> & React.PropsWithChildren

export const Modal: FC<ModalProps> = ({children, wrapperId, onClose, show }) => {
    const backdropClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        onClose()
    }

    const contentClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    if (!show) return null

    return (
        <ModalPortal wrapperId={wrapperId}>
            <div className="modal" onClick={backdropClickHandler}>
                <div className="modal__content" onClick={contentClickHandler}>
                    <span className="modal__close-btn" onClick={onClose}>
                        <Close />
                    </span>
                    {children}
                </div>
            </div>
        </ModalPortal>
    )
}

const ModalPortal: FC<ModalPortalProps> = ({children, wrapperId = "modal-portal-wrapper"}) => {
    const wrapper = useMemo(() => document.getElementById(wrapperId) || document.body, []);

    return createPortal(children, wrapper)
}