const ShimmerComponent = () => {
  return (
    <div className="restaurants-list">
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerComponent;
