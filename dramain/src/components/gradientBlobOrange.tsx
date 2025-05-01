
const GradientBlob = () => {
  // Define size and calculate blur amount (replicating --size CSS variable)
  // You can make these props later if you need dynamic sizes
  const sizePx = 1000; // The '--size' value from the original CSS
  const blurPx = sizePx / 100; // Blur is size / 10

  return (
    <div className="

    absolute top-[300px] left-[200px] md:top-[-400px] md:left-[-150px]">
      <div
        className={`
          z-100                         /* z-index */
          w-[${sizePx}px]              /* Width using arbitrary value */
          h-[${sizePx}px]              /* Height using arbitrary value */
          blur-[${blurPx}px]           /* Blur filter using arbitrary value */
          gradient-blob-orange          /* Apply custom CSS class for gradient, animation, border-radius */
          md:w-[800px] md:h-[800px] md:blur-[100px]
        `}
      >
      </div>
    </div>
  );
};

export default GradientBlob;