import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { setUserDetails } from "./store/userSlice";
import fetchUserDetails from "./utils/fetchUserDetails";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const fetchUser = async () => {
    const response = await fetchUserDetails();
    if (response) {
      const { data: responseData } = response;
      if (responseData?.success) {
        dispatch(setUserDetails(responseData?.data));
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);
  return (
    <>
      <Header />
      <Menu />
      <main className="min-h-[76vh]">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
