import { useLogin } from "../Hooks/useLogin";
const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
};

export default ProfilePage;
