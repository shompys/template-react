import cx from "classnames";
import { Helmet } from "react-helmet";

import styles from "./app.module.scss";

import { HelloWorld } from "@/components/HelloWorld";
import { pushGTMCustomEvent, pushGTMEvent } from "@/services/gtmEvents";
import { useModalManager } from "@/providers/ModalManagerProvider/ModalManagerProvider";
import { modalIds } from "@/providers/ModalManagerProvider/modals";

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
                    pushGTMEvent({
                        event_name: "name_test",
                        event_action: "action_test",
                        event_category: "category_test",
                    });
                    pushGTMCustomEvent({
                        event_name: "name_test",
                        params: {
                            flow: "template flow",
                            element: "element",
                            index: 1,
                            list_name: "list_name_template",
                            zaraza: "zaraza_prop",
                        },
                    });
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
