const ShimmerComponent = () => {
  return (
    <div className="res-container">
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerComponent;
