import App from "@/firebase/firebase.config";
import { getAuth } from "firebase/auth";

const auth = getAuth(App);

export default auth;
