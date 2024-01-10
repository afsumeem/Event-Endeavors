import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import { useRouter } from "next/router";
import { useGetUsersQuery } from "@/redux/features/users/usersApi";

const useAdminRoute = () => {
  const { data } = useGetUsersQuery({});
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const matchingUser = data?.find(
    (userData: any) => userData.uid === user?.uid
  );

  const isAdmin = matchingUser?.role === "admin" || false;

  useEffect(() => {
    if (!loading && !user && !isAdmin) {
      router.push("/login");
    }
  }, [user, loading, router, isAdmin]);

  return loading;
};

export default useAdminRoute;
