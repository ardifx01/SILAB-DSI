import React from 'react';

const Collapsible = ({ trigger, children, open, onOpenChange }) => {
  return (
    <div>
      <div onClick={() => onOpenChange(!open)}>
        {trigger}
      </div>
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible;