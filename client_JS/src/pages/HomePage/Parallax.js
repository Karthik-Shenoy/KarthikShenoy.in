import React from 'react';

const Parallax = ({ image, children }) => {
  const handleScroll = () => {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.7}px`;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="parallax h-screen bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="pt-20 sm:pt-40 pb-16 sm:pb-32">
        {children}
      </div>
    </div>
    </>
  );
};

export default Parallax;
