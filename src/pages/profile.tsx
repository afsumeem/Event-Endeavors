import auth from "@/firebase/firebase.auth";
import usePrivateRoute from "@/privateRoute/layout";
import { useSession, signOut } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfilePage = () => {
  // const { data: session } = useSession();

  const [user, loading, error] = useAuthState(auth);
  // console.log(user);

  const loadingPage = usePrivateRoute();

  if (loadingPage) {
    return "loading.....";
  }
  return (
    <div className="my-14">
      <h2>profile</h2>
      {/* <h2>{session?.user?.name}</h2> */}
      <h2>{user?.email}</h2>
    </div>
  );
};

export default ProfilePage;
