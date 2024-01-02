import { useSession, signOut } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h2>{session?.user?.name}</h2>
      <h2>{session?.user?.email}</h2>
    </div>
  );
};

export default ProfilePage;
