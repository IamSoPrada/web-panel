import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home";
import { NoMatch } from "@/pages/no-match";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { AppContainer } from "./styles";

const News = React.lazy(() => import("./pages/news"));
const Todos = React.lazy(() => import("./pages/todos"));
const Chat = React.lazy(() => import("./pages/chat"));
const Weather = React.lazy(() => import("./pages/weather"));
const Settings = React.lazy(() => import("./pages/settings"));

type AppProps = {
  children?: React.ReactNode;
};

export const App: React.FC<AppProps> = (props) => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="news"
            element={
              <React.Suspense fallback={<>d</>}>
                <News />
              </React.Suspense>
            }
          />
          <Route
            path="chat"
            element={
              <React.Suspense fallback={<>d</>}>
                <Chat />
              </React.Suspense>
            }
          />
          <Route
            path="todos"
            element={
              <React.Suspense fallback={<>d</>}>
                <Todos />
              </React.Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <React.Suspense fallback={<>d</>}>
                <Settings />
              </React.Suspense>
            }
          />
          <Route
            path="weather"
            element={
              <React.Suspense fallback={<>d</>}>
                <Weather />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppContainer>
  );
};
