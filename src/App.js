import { Paper } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { ScrollToTop } from "./components";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthModalProvider } from "./contexts/AuthModalContext";
import { LogoutModalProvider } from "./contexts/LogoutModalContext";
import { MobileDrawerProvider } from "./contexts/MobileDrawerContext";
import { VideoProvider } from "./contexts/VideoContext";
import {
  History,
  Landingpage,
  NotFound,
  Playlist,
  PlaylistListing,
  SingleVideo,
  VideoListing,
} from "./pages";
import { LikedVideos } from "./pages/LikedVideos";
import { Profile } from "./pages/Profile";
import { WatchLater } from "./pages/WatchLater";

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
                  <ToastContainer />
                  <Routes>
                    <Route path="/mock" element={<MockmanEs />} />
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/explore" element={<VideoListing />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/playlists" element={<PlaylistListing />} />
                    <Route path="/watch-later" element={<WatchLater />} />
                    <Route path="/liked-videos" element={<LikedVideos />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/video/:videoId" element={<SingleVideo />} />
                    <Route
                      path="/playlist/:playlistId"
                      element={<Playlist />}
                    />
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
