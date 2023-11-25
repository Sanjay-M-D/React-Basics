const ShimmerComponent = () => {
  return (
    <div className="res-container">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default ShimmerComponent;
