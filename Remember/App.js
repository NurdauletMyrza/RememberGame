import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, createContext, useEffect, useState } from "react";
import styles from "./Styles.module.css";
import { SignInPage, SignUpPage } from "./AuthenticationPages";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import LeaderboardPage from "./LeaderboardPage";

export const UserContext = createContext();

const withRouter = (component) => (() => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>{component()}</Suspense>
    </BrowserRouter>
  );
});

function App() {
  const [user, setUser] = useState({score: 0});

  const onSignIn = (userData) => {
    setUser(userData);
    console.log(userData);
  };

  const onSignUp = (userData) => {
    setUser(userData);
    console.log(userData);
  };

  const onSignOut = () => {
    setUser({score: 0});
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      <header className={styles.header}>
        <nav className={styles.header__navigation}>
          <Link className={styles.header__link} to="/">
            <h1 className={styles.header__title}>Remember</h1>
          </Link>
          <Link className={styles.header__link} to="/leaderboard">
            <svg className={styles.header__icon} width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 8.625C40 10.3508 38.7563 11.75 37.2222 11.75C37.205 11.75 37.1906 11.7401 37.1734 11.7398L33.6651 33.4507C33.4722 34.6328 32.5556 35.5 31.4792 35.5H8.52083C7.44722 35.5 6.52639 34.6359 6.33472 33.4477L2.82708 11.7422C2.80972 11.7422 2.79514 11.75 2.71528 11.75C1.18125 11.75 -0.0625 10.3508 -0.0625 8.625C-0.0625 6.89922 1.24375 5.5 2.71528 5.5C4.18681 5.5 5.49306 6.89922 5.49306 8.625C5.49306 9.32797 5.24854 9.94453 4.90021 10.4664L11.1245 16.068C12.2294 17.0625 13.8676 16.6573 14.5002 15.2336L18.5002 6.23359C17.7153 5.68281 17.1597 4.74531 17.1597 3.625C17.1597 1.89922 18.4653 0.5 20 0.5C21.5347 0.5 22.7153 1.89922 22.7153 3.625C22.7153 4.74531 22.1623 5.68281 21.375 6.23438L25.375 15.2344C26.0077 16.6578 27.6465 17.0625 28.7507 16.0688L34.975 10.4672C34.6875 9.94531 34.4444 9.25781 34.4444 8.625C34.4444 6.89844 35.6875 5.5 37.2222 5.5C38.7569 5.5 40 6.89844 40 8.625Z" fill="#D8DEE9"/>
            </svg>
          </Link>
          <Link className={styles.header__link} to="/about">
            <svg className={styles.header__icon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_7_9)">
                <path d="M20 0C8.95312 0 0 8.95312 0 20C0 31.0469 8.95312 40 20 40C31.0469 40 40 31.0469 40 20C40 8.95312 31.0469 0 20 0ZM20 10C21.3805 10 22.5 11.1195 22.5 12.5C22.5 13.8805 21.3805 15 20 15C18.6195 15 17.5 13.8828 17.5 12.5C17.5 11.1172 18.6172 10 20 10ZM23.125 30H16.875C15.8438 30 15 29.1641 15 28.125C15 27.0859 15.8398 26.25 16.875 26.25H18.125V21.25H17.5C16.4648 21.25 15.625 20.4102 15.625 19.375C15.625 18.3398 16.4688 17.5 17.5 17.5H20C21.0352 17.5 21.875 18.3398 21.875 19.375V26.25H23.125C24.1602 26.25 25 27.0898 25 28.125C25 29.1602 24.1641 30 23.125 30Z" fill="#D8DEE9"/>
              </g>
              <defs>
                <clipPath id="clip0_7_9">
                  <rect width="40" height="40" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link className={styles.header__link} to="/user">
            <svg className={styles.header__icon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_7_11)">
                <path d="M20 20C26.3125 20 31.4286 15.5227 31.4286 10C31.4286 4.47734 26.3125 0 20 0C13.6875 0 8.57143 4.47734 8.57143 10C8.57143 15.5227 13.6875 20 20 20ZM24.5268 23.75H15.4732C6.92946 23.75 0 29.8125 0 37.2891C0 38.7844 1.38571 39.9977 3.09464 39.9977H36.9071C38.6161 40 40 38.7891 40 37.2891C40 29.8125 33.0714 23.75 24.5268 23.75Z" fill="#D8DEE9"/>
              </g>
              <defs>
                <clipPath id="clip0_7_11">
                  <rect width="40" height="40" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </nav>
        {
          (user === undefined || user.email === undefined) ? 
          (
            <div className={styles.header__buttons}>
              <Link className={styles.header__link} to="/sign-in">
                <button className={styles.header__button}>Sign in</button>
              </Link>
              <Link className={styles.header__link} to="/sign-up">
                <button className={styles.header__button}>Sign up</button>
              </Link>
            </div>
          )
          :
          (
            <div className={styles.header__buttons}>
              <button onClick={onSignOut} className={styles.header__button}>Sign out</button>
            </div>
          )
        }
      </header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/sign-in" element={<SignInPage onSignIn={onSignIn} />} />
        <Route path="/sign-up" element={<SignUpPage onSignUp={onSignUp} />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/:id" element={<div>user page</div>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default withRouter(App);