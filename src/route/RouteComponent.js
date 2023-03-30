import Cookies from "js-cookie";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import JobVacancy from "../pages/jobvacancy/JobVacancy";
import FormJobVacancy from "../pages/listJobVacancy/FormJobVacancy";
import ListJobVacancy from "../pages/listJobVacancy/ListJobVacancy";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import LayoutDashboard from "../widgets/LayoutDashboard";
import LayoutLanding from "../widgets/LayoutLanding";

const RouteComponent = () => {
    const LoginRoute = (props) => {
        if (Cookies.get("token") === undefined) {
            return props.children;
        } else if (Cookies.get("token") !== undefined) {
            return <Navigate to={"/"} />;
        }
    };
    const DashboardRoute = (props) => {
        if (Cookies.get("token") === undefined) {
            return <Navigate to={"/login"} />;
        } else if (Cookies.get("token") !== undefined) {
            return props.children;
        }
    };
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <LayoutLanding>
                                <Home />
                            </LayoutLanding>
                        }
                    />
                    <Route
                        path="/job-vacancy"
                        element={
                            <LayoutLanding>
                                <JobVacancy />
                            </LayoutLanding>
                        }
                    />
                    <Route
                        path="/detail/:id"
                        element={
                            <LayoutLanding>
                                <Detail />
                            </LayoutLanding>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <LoginRoute>
                                <Login />
                            </LoginRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <LoginRoute>
                                <Register />
                            </LoginRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <DashboardRoute>
                                <LayoutDashboard>
                                    <Dashboard />
                                </LayoutDashboard>
                            </DashboardRoute>
                        }
                    />
                    <Route
                        path="/dashboard/list-job-vacancy"
                        element={
                            <DashboardRoute>
                                <LayoutDashboard>
                                    <ListJobVacancy />
                                </LayoutDashboard>
                            </DashboardRoute>
                        }
                    />
                    <Route
                        path="/dashboard/list-job-vacancy/form"
                        element={
                            <DashboardRoute>
                                <LayoutDashboard>
                                    <FormJobVacancy />
                                </LayoutDashboard>
                            </DashboardRoute>
                        }
                    />
                    <Route
                        path="/dashboard/profile"
                        element={
                            <DashboardRoute>
                                <LayoutDashboard>
                                    <Profile />
                                </LayoutDashboard>
                            </DashboardRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RouteComponent;
