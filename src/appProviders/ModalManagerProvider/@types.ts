import { ComponentType } from "react";

import { dynamicModals } from "./modals";

export type ModalIds = keyof typeof dynamicModals;

export interface ModalManagerValues {
    showModal: ShowModalFn;
    closeModal: CloseModalFn;
    isOpen: IsOpenFn;
}

export type ShowModalFn = <K extends ModalIds>(
    id: K,
    props?: Minus<ExtractProps<(typeof dynamicModals)[K]>, ModalBaseProps>,
    options?: { multiple: boolean },
) => void;

export type CloseModalFn = <K extends ModalIds>(id?: K) => void;

export type IsOpenFn = <K extends ModalIds>(id?: K) => boolean;

type ExtractProps<Type> = Type extends ComponentType<infer X> ? X : unknown;

type Diff<T, U> = T extends U ? never : T;

type Minus<T, U> = Pick<T, Diff<keyof T, keyof U>>;

export interface StatusModal {
    id: ModalIds;
    props: any;
}

export interface ModalBaseProps {
    show: boolean;
    onClose: () => void;
}
