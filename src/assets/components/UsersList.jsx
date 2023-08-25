import UserCard from "./UserCard";

const UsersList = ({ users, deleteUser, handleClickEdit, setIsShowFormDelete, setIdToDelete }) => {
  return (
    <section className="grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] md:grid-cols-[repeat(auto-fill,_380px)] justify-center">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleClickEdit={handleClickEdit}
          setIsShowFormDelete={setIsShowFormDelete}
          setIdToDelete={setIdToDelete}
        />
      ))}
    </section>
  );
};

export default UsersList;
