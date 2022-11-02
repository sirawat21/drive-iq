const Frame = ({ children }) => {
  return (
    <div className="mx-auto mt-5 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
         {children}
      </div>
    </div>
  );
};
export default Frame;
