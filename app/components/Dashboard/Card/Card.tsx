import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className='border border-neutral-200 rounded p-10 shadow-md'>
      {children}
    </div>
  );
}

export default Card;
