import { Suspense, createContext, useContext, useMemo, useState } from "react";

import { CloseModalFn, ModalManagerValues, IsOpenFn, ShowModalFn, StatusModal } from "./@types";
import { dynamicModals } from "./modals";

const ModalContext = createContext<ModalManagerValues | undefined>(undefined);

type ModalProviderProps = {
    children: React.ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [statusModal, setStatusModal] = useState<StatusModal[]>([]);

    const showModal: ShowModalFn = (id, props, options) => {
        setStatusModal((prev) => (options?.multiple ? [...prev, { id, props }] : [{ id, props }]));
    };

    const closeModal: CloseModalFn = (id) => {
        if (id === undefined) {
            setStatusModal([]);

            return;
        }
        setStatusModal((prev) => prev.filter((statusModal) => statusModal.id !== id));
    };

    const isOpen: IsOpenFn = (id) =>
        id ? statusModal.findIndex((Modal) => Modal.id === id) !== -1 : statusModal.length > 0;

    const renderModals = useMemo(
        () =>
            statusModal.map((modal) => {
                const Modal = dynamicModals[modal.id];

                return (
                    <Suspense fallback={<></>}>
                        <Modal
                            key={modal.id}
                            show
                            onClose={() => closeModal(modal.id)}
                            {...(modal.props || {})}
                        />
                    </Suspense>
                );
            }),
        [statusModal],
    );

    return (
        <ModalContext.Provider
            value={{
                showModal,
                closeModal,
                isOpen,
            }}
        >
            {renderModals}
            {children}
        </ModalContext.Provider>
    );
};

export const useModalManager = () => {
    const context = useContext(ModalContext);

    if (context === undefined) throw Error("Out of context: useModalManager");

    return context;
};
