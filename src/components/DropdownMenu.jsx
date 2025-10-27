import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from "react-dom";

const DropdownMenu = ({ children, isVisible, targetRef, onMouseEnter, onMouseLeave }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dropdownElement = document.createElement('div');
    dropdownRef.current = dropdownElement;
    dropdownElement.style.position = 'fixed';
    dropdownElement.style.zIndex = '9999';
    document.body.appendChild(dropdownElement);

    return () => {
      document.body.removeChild(dropdownElement);
    };
  }, []);

  useEffect(() => {
    if (isVisible && targetRef.current && dropdownRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const dropdownElement = dropdownRef.current;
      
      dropdownElement.style.top = `${rect.bottom + window.scrollY + 8}px`;
      dropdownElement.style.left = `${rect.left + window.scrollX + (rect.width / 2)}px`;
      dropdownElement.style.transform = 'translateX(-50%)';
    }
  }, [isVisible, targetRef]);

  if (!isVisible || !dropdownRef.current) return null;

  return ReactDOM.createPortal(
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="dropdown-portal"
    >
      {children}
    </div>, 
    dropdownRef.current
  );
};

export default DropdownMenu;