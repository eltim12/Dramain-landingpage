
const GradientBlob = () => {
  // Define size and calculate blur amount (replicating --size CSS variable)
  // You can make these props later if you need dynamic sizes
  const sizePx = 1200; // The '--size' value from the original CSS
  const blurPx = sizePx / 100; // Blur is size / 10

  return (
    <div className="hidden md:flex absolute bottom-[-700px] right-[-200px]">
      <div
        className={`
          z-0                          /* z-index */
          w-[${sizePx}px]              /* Width using arbitrary value */
          h-[${sizePx}px]              /* Height using arbitrary value */
          blur-[${blurPx}px]           /* Blur filter using arbitrary value */
          gradient-blob-purple          /* Apply custom CSS class for gradient, animation, border-radius */
          md:w-[1200px] md:h-[1200px] md:blur-[100px]
        `}
      >
      </div>
    </div>
  );
};

export default GradientBlob;