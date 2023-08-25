const Header = ({ setIsShowForm }) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
  };

  return (
    <header className="flex justify-between item-center p-4">
      <h1 className="font-bold text-3xl md:ml-20">Users</h1>

      <button
        onClick={handleClickShowModal}
        className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm md:mr-20"
      >
        <i className="bx bx-plus"></i> Create new user
      </button>
    </header>
  );
};

export default Header;
