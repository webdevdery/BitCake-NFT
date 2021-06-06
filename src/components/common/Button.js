import classNames from 'classnames';
import React from 'react';

function CustomButton({label, type = 'button', styled, onClick, className}) {
  return (
    <button
      type={type}
      className={classNames(
        'items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none transition duration-500',
        styled === 'solid'
          ? 'text-white bg-primary hover:bg-primary-dark hover:shadow-lg'
          : styled === 'outline'
          ? 'text-primary bg-white border-primary hover:shadow-lg'
          : 'text-white bg-black hover:shadow-lg',
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default CustomButton;
