const UserCard = ({ name, email, age }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  );
};

export default UserCard;
