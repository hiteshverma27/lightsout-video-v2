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
  Playlist,
  PlaylistListing,
  SingleVideo,
  VideoListing,
} from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthModalProvider } from "./contexts/AuthModalContext";
import { LogoutModalProvider } from "./contexts/LogoutModalContext";
import { MobileDrawerProvider } from "./contexts/MobileDrawerContext";
import { VideoProvider } from "./contexts/VideoContext";
import { ToastContainer } from 'react-toastify';
import { WatchLater } from "./pages/WatchLater";
import { LikedVideos } from "./pages/LikedVideos";
import { Profile } from "./pages/Profile";
import { SingleVideoSkeleton } from "./pages/SingleVideoSkeleton";

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
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/playlists" element={<PlaylistListing />} />
                      <Route path="/watch-later" element={<WatchLater />} />
                      <Route path="/liked-videos" element={<LikedVideos />} />
                      <Route path="*" element={<NotFound />} />
                      <Route path="/video/:videoId" element={<SingleVideo />} />
                      <Route path="/videos/:videoId" element={<SingleVideoSkeleton />} />
                      <Route path="/playlist/:playlistId" element={<Playlist />} />
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
