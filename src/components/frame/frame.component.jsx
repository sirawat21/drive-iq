const Frame = ({ children }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="mt-2 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Frame;
