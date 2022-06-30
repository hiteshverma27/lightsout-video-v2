import { Paper } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ScrollToTop } from "./components";
import {
  History,
  Landingpage,
  NotFound,
  PlaylistListing,
  SingleVideo,
  VideoListing,
} from "./pages";
import { AuthProvider } from "./temp-context/AuthContext";
import { AuthModalProvider } from "./temp-context/AuthModalContext";
import { LogoutModalProvider } from "./temp-context/LogoutModalContext";
import { MobileDrawerProvider } from "./temp-context/MobileDrawerContext";
import { VideoProvider } from "./temp-context/VideoContext";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <ModalsProvider>
        <AuthProvider>
          <VideoProvider>
            <MobileDrawerProvider>
              <AuthModalProvider>
                <LogoutModalProvider>
                  <Paper>
                    <ScrollToTop />
                    <ToastContainer/>
                    <Routes>
                      <Route path="/mock" element={<MockmanEs />} />
                      <Route path="/" element={<Landingpage />} />
                      <Route path="/explore" element={<VideoListing />} />
                      <Route path="/history" element={<History />} />
                      <Route path="/playlists" element={<PlaylistListing />} />
                      <Route path="*" element={<NotFound />} />
                      <Route path="/video/:videoId" element={<SingleVideo />} />
                    </Routes>
                  </Paper>
                </LogoutModalProvider>
              </AuthModalProvider>
            </MobileDrawerProvider>
          </VideoProvider>
        </AuthProvider>
      </ModalsProvider>
  );
}

export default App;
