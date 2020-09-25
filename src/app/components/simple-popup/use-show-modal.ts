import React from 'react';

export const useShowModal = () => {
  const [isPopupShowed, setShowPopup] = React.useState(false);

  const openPopup = React.useCallback(() => {
    setShowPopup(() => true);
  }, []);

  const closePopup = React.useCallback(() => {
    setShowPopup(() => false);
  }, []);

  return {
    isPopupShowed,
    openPopup,
    closePopup,
  };
};
