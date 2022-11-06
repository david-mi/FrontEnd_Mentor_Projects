/**
 * Close modale with previous button click
 * 
 * @param {MouseEvent} button 
 */

export const handlePreviousClickInModal = ({ button }) => {
  if (button === 3) {
    closeCountryModal();
  }
};