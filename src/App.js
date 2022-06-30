import { MantineProvider, Paper } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ScrollToTop } from "./components";
import { Landingpage, NotFound, PlaylistListing, SingleVideo, VideoListing } from "./pages";
import { AuthModalProvider } from "./temp-context/AuthModalContext";
import { LogoutModalProvider } from "./temp-context/LogoutModalContext";
import { MobileDrawerProvider } from "./temp-context/MobileDrawerContext";
function App() {
  return (
    <div className="App">
          <ModalsProvider>
            <MobileDrawerProvider>
              <AuthModalProvider>
                <LogoutModalProvider>
                  <Paper>
                    <ScrollToTop />
                    <Routes>
                      <Route path="/mock" element={<MockmanEs />} />
                      <Route path="/" element={<Landingpage />} />
                      <Route path="/explore" element={<VideoListing />} />
                      <Route path="/playlists" element={<PlaylistListing />} />
                      <Route path="*" element={<NotFound />} />
                      <Route path="/video/:videoId" element={<SingleVideo />} />
                    </Routes>
                  </Paper>
                </LogoutModalProvider>
              </AuthModalProvider>
            </MobileDrawerProvider>
          </ModalsProvider>
    </div>
  );
}

export default App;
