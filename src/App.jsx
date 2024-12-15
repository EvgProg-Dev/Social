import "./App.css";

import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Music } from "./components/Music";
import { News } from "./components/News";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, { Suspense } from "react";
import { Spinner } from "./components/common/Spinner";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
    import("./components/Users/UsersContainer")
);

export const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />

            <Navigation />
            <main className="main__content">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route
                            path="/profile/:userId?"
                            element={<ProfileContainer />}
                        />
                        <Route
                            path="/messages"
                            element={<DialogsContainer />}
                        />
                        <Route path="/music" element={<Music />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            </main>

            <Footer />
        </div>
    );
};
