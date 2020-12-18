import React from 'react';
import './SidebarButton.css';

const { useState } = React;

export default function SidebarButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={(e) => {
        const button = document.querySelector('.sidebar-button');
        button.classList.toggle('open');
        setTimeout(() => {
          const newOpenState = !isOpen;
          setIsOpen(newOpenState);
          props.onToggleMenuState(e, newOpenState);
        }, 200);
      }}
      className="sidebar-button"
      data-testid="sidebar-btn"
      aria-hidden="true"
    >
      <span className="sbtn-bar top" />
      <span className="sbtn-bar middle" />
      <span className="sbtn-bar bottom" />
    </div>
  );
}
