import React from 'react';


type CardProps = {
  title: string;
  imageUrl?: string; 
  children: React.ReactNode; 
  link?: string; 
};

// Компонент Card
const Card: CardProps = ({ title, imageUrl, children, link }) => {
    return (
    <div className="card" style={{ width: '18rem' }}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt="Card image cap" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        {link && (
          <a href={link} className="btn btn-primary">
            Go somewhere
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;


