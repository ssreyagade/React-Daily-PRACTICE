const ConditionalRendering = ({ pName, pPrice, pCat }) => {
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{pName}</h5>
          <p className="card-text">₹ {pPrice}</p>
          <p className="card-text">{pCat}</p>
        </div>
      </div>
    </div>
  );
};

export default ConditionalRendering;
