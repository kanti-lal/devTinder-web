const UserCard = ({ user }) => {
  const { photoUrl, firstName, about, lastName, age, gender } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="">
          <img src={photoUrl} alt="photo" className="" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-3xl capitalize">
            {firstName + " " + lastName}
          </h1>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p className="py-3">{about}</p>
          <div className="card-actions gap-4 my-10">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
