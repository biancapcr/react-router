const Homepage = () => {
  return (
    <>
      <div className="page page-home">
        <div className="hero-row">
          <div className="hero-col">
            <h1 className="hero-title">Benvenuto nel nostro store</h1>
            <p className="hero-text">
              Scopri la nostra selezione di prodotti di qualità: tech, casa, moda
              e molto altro. Offerte nuove ogni giorno.
            </p>
          </div>

          <div className="hero-col">
            <img
              src="https://via.placeholder.com/600x400?text=Promozione+Speciale"
              alt="Promozione"
              className="promo-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;