const UserCard = ({ user, handleClickEdit, setIsShowFormDelete, setIdToDelete }) => {
    const handleClickFormDelete = () => {
        setIsShowFormDelete((isShowFormDelete) => !isShowFormDelete);
        setIdToDelete(user)
      };

  return (
    <article className="border border-gray-p p-4  md:grid md:grid-cols-2 md:grid-rows-[40px_minmax(180px,_1fr)_50px] md:gap-2">
      <div className="md:row-start-2 md:col-start-2">
        <img
          className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md"
          src={user.image_url ? user.image_url : "images/noProfile.jpg"}
          alt="User image"
        />
      </div>
      <h3 className="font-bold text-[18px] text-[#0F0F2D] border-b-[0.5px] border-[#E5E5E5] py-1 md:col-start-1 md:col-span-2">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="py-2">
        <li className="py-1">
          <h4 className="font-['Roboto'] text-gray-p">E-mail</h4>
          <span className="text-[14px]">{user.email}</span>
        </li>
        <li className="py-1">
          <h4 className="font-['Roboto'] text-gray-p">Birthday</h4>
          <span className="text-[14px]">
            <i className="bx bx-gift"></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <div className="flex justify-end  item-center gap-x-4 border-t-[0.5px] border-[#E5E5E5] pt-3 md:col-start-1 md:col-span-2">
        <button
          className="bg-red-p text-[#FFFFFF] box-border h-[43px] w-[43px]  border-0 content-center rounded"
          onClick={handleClickFormDelete}
        >
          <i className="bx bx-trash text-2xl "></i>
        </button>

        <button
          className="text-[#D3D3D3] bg-[#F6F6F6] border-[#BDBDBD] 
          box-border h-[43px] w-[43px]  border rounded justify-center"
          onClick={() => handleClickEdit(user)}
        >
          <i className="bx bx-pencil text-2xl"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
