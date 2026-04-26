import { createContext, useContext, useState, ReactNode } from 'react';

interface CallbackModalContextType {
  isModalOpen: boolean;
  openModal: (destination?: string) => void;
  closeModal: () => void;
  defaultDestination: string;
}

const CallbackModalContext = createContext<CallbackModalContextType | undefined>(undefined);

export const CallbackModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultDestination, setDefaultDestination] = useState('');

  const openModal = (destination?: string) => {
    if (destination) {
      setDefaultDestination(destination);
    } else {
      setDefaultDestination('');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CallbackModalContext.Provider value={{ isModalOpen, openModal, closeModal, defaultDestination }}>
      {children}
    </CallbackModalContext.Provider>
  );
};

export const useCallbackModal = () => {
  const context = useContext(CallbackModalContext);
  if (!context) {
    throw new Error('useCallbackModal must be used within a CallbackModalProvider');
  }
  return context;
};
