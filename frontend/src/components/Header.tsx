import React from 'react';

interface HeaderProps {

}

export const Header = ({ }: HeaderProps) => {
  return (
    <header className="border-bottom">
      <nav className="d-flex justify-content-end py-3">
        <div className="mx-3">Home</div>
        <div className="mx-3">Profile</div>
        <div className="mx-3">About me</div>
      </nav>
    </header>
  );
};