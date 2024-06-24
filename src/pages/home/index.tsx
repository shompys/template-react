import cx from "classnames";
import { Helmet } from "react-helmet";

import styles from "./app.module.scss";

import { HelloWorld } from "@/components/HelloWorld";
import { useModalManager } from "@/appProviders/ModalManagerProvider/ModalManagerProvider";
import { modalIds } from "@/appProviders/ModalManagerProvider/modals";

export const Home = () => {
    const { showModal } = useModalManager();

    return (
        <main className="mt-5 flex flex-col items-center">
            <Helmet>
                <title>Home - :D</title>
            </Helmet>
            <HelloWorld />
            <button
                className={cx(
                    "text-mdw-auto mt-3 inline-block rounded-lg border bg-blue-500 px-2 py-2",
                    styles.button,
                )}
                onClick={() => {
                    console.log("button");
                }}
            >
                GTM test
            </button>
            <button
                className={cx(
                    "text-mdw-auto mt-3 inline-block rounded-lg border bg-blue-500 px-2 py-2",
                    styles.button,
                )}
                onClick={() => showModal(modalIds.SignInRedirect)}
            >
                Mostrar modal
            </button>
        </main>
    );
};
