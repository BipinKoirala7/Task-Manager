import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const authState = useSelector((state: any) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn
      ? `${authState.user.name}'s tasks`
      : "Task Manager";
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className="mx-4 mt-8 rounded-3xl bg-gradient-to-br from-primary/90 to-primary-dark/90 text-white h-[40vh] py-8 text-center shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />
            <div className="relative">
              <h1 className="text-3xl font-semibold">
                {" "}
                Welcome to Task Manager App
              </h1>
              <Link
                to="/signup"
                className="mt-10 text-xl inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 backdrop-blur-sm transition-all hover:bg-white/25 hover:gap-3"
              >
                <span>Join now to manage your tasks</span>
                <span className="text-base">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-lg mt-8 mx-8 border-b border-b-slate-200 text-slate-700">
              Welcome {authState.user.name}
            </h1>
            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Home;
