import React from 'react';
import Card from './Card/Card.tsx'; // Импортируем компонент Card

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Card title="Card title" imageUrl="https://via.placeholder.com/150" link="https://example.com">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card>
        </div>
        <div className="col-md-4">
          <Card title="Special title treatment">
            With supporting text below as a natural lead-in to additional content.
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
