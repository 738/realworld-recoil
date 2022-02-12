import React from 'react';

interface Props {
  label: string;
  onClick: () => void;
}

export const Tag = ({ label, onClick }: Props) => {
  return (
    <div className="tag-pill tag-default" onClick={onClick}>
      {label}
    </div>
  );
};
