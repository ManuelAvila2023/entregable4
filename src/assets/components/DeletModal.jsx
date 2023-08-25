const DeletModal = ({ isShowFormDelete, deleteUser, idToDelete,setIsShowFormDelete }) => {

  const handleClickCloseDeleteModal = () => {
    setIsShowFormDelete((isShowFormDelete) => !isShowFormDelete);
    
  };

  return (
    <section
      className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center  transition-opacity ${
        isShowFormDelete ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form className="bg-white p-4 grid gap-4 w-[300px] relative">
      <i onClick={handleClickCloseDeleteModal} className="bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer"></i>

        <h3 className="text-2xl font-bold">Delete user</h3>
        <label className="text-xs font-semibold">
        You want to delete the user {idToDelete.first_name} {idToDelete.last_name}
        </label>
        <button
          onClick={() => deleteUser(idToDelete.id)}
          className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm"
        >
          Accept
        </button>
      </form>
    </section>
  );
};

export default DeletModal;
