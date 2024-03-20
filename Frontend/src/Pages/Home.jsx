import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/userSlice";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="overflow-hidden">
      <img
        src="/mclaren-765lt-2024-3840x2160-13604.jpg"
        alt="School"
        className="absolute -z-20 w-screen h-screen "
      />
      <div className=" justify-center bg-black/30  h-screen items-center  flex">
        <p className="text-white  font-[poppins] text-6xl shadow-lg font-black">
          Welcome to the Home Page
          <h6 className="text-white  font-[poppins] text-7xl shadow-lg font-black">
            {userInfo?.name}
          </h6>
        </p>
      </div>
    </div>
  );
};

export default Home;
