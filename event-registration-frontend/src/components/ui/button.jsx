import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Simple, styled Tailwind button
export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#310C7E] to-[#9372C1] hover:from-[#9372c1] hover:to-[#310C7E] transition-all shadow-md hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
