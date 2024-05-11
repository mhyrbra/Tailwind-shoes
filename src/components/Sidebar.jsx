const Sidebar = ({ children, isOpen, onClickClose }) => {
  return (
    <div>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full transform bg-white transition duration-300 md:w-1/2 lg:w-[30%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 font-bold text-black"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
};

export default Sidebar;
