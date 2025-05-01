const GradientBlob = () => {
  // Define mobile-specific size and blur
  // These should probably be smaller for mobile
  const mobileSizePx = 500; // Example: smaller base size
  const mobileBlurPx = 25; // Example: adjusted base blur

  return (
    // 1. Added 'absolute' positioning
    // 2. Changed visibility to 'flex md:hidden' (visible xs, sm; hidden md+)
    <div className={`absolute top-[300px] left-[200px] flex md:hidden`}> {/* Adjust top/left for mobile view */}
      <div
        className={`
          z-0                          /* z-index */
          w-[${mobileSizePx}px]         /* Use mobile size */
          h-[${mobileSizePx}px]         /* Use mobile size */
          blur-[${mobileBlurPx}px]      /* Use mobile blur */
          gradient-blob-mobile         /* 3. Use the correct CSS class */
          /* 4. Removed redundant md: styles */
        `}
      >
        {/* Empty div for the gradient blob effect */}
      </div>
    </div>
  );
};

export default GradientBlob;