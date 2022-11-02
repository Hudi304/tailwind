import React, { Fragment, ReactNode, useEffect, useState, createContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/components/button/Button";
import { Icon, ICONS } from "@/components/icon/Icon";

const ModalContext = createContext({
  unSetModal: () => { },
  setModal: (modal: any) => { console.log(modal) }
});

type ModalProps = {
  modal: ReactNode;
  unSetModal: () => void;
};

const Modal = ({ modal, unSetModal }: ModalProps) => {
  useEffect(() => {
    const bind = (e: any) => {
      if (e.keyCode !== 27) {
        return;
      }
      if (document.activeElement && ["INPUT", "SELECT"].includes(document.activeElement.tagName)) {
        return;
      }
      unSetModal();
    };

    document.addEventListener("keyup", bind);
    return () => document.removeEventListener("keyup", bind);
  }, [modal, unSetModal]);

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={unSetModal}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white p-6 rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle">
              <Button className="absolute top-1 right-1" variant="icon-btn" onClick={unSetModal}>
                <Icon icon={ICONS.CANCEL} />
              </Button>
              <div className="mt-4 overflow-hidden">{modal}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const ModalProvider = (props: any) => {
  const [modals, setModals] = useState([] as any[]);
  const setModal = (modal: any) => {
    setModals([...modals, modal]);
  };
  const unSetModal = () => {
    setModals([...modals.slice(0, modals.length - 1)]);
  };

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modals.map((modal: any, index: number) => (
        <Modal key={index} modal={modal} unSetModal={unSetModal} />
      ))}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  return context;
};

export { ModalProvider, useModal };
