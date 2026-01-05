import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import HostEvent from "./pages/admin/HostEvent";
import MyHostedEvents from "./pages/admin/MyHostedEvents";
import UserHomePage from "./pages/user/UserHomePage";
import EventDetails from "./pages/EventDetails";
import UserAllEvents from "./pages/user/UserAllEvents";
import UserMyEvents from "./pages/user/UserMyEvents";
import HostDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";


// General Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import { Search } from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventRegistrationHelp from "./pages/Help";
import ContactPage from "./pages/Contact";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";

export default function App() {
  const mainStyle = {
    paddingTop: "50px",

  };

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <main className="flex-grow w-full mx-auto" style={mainStyle}>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Home />} />

          {/* General Public Routes */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/help" element={<EventRegistrationHelp />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Login / Auth Route */}
          <Route path="/login/:userType" element={<Login />} />
          <Route path="/signup/:userType" element={<Register />} />


          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/host"
            element={
              <ProtectedRoute>
                <HostEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/my-events"
            element={
              <ProtectedRoute>
                <MyHostedEvents />
              </ProtectedRoute>
            }
          />

          {/* Host Dashboard */}
          <Route
            path="/host-dashboard"
            element={
              <ProtectedRoute>
                <HostDashboard />
              </ProtectedRoute>
            }
          />

          {/* User Routes */}
          <Route
            path="/user-home"
            element={
              <ProtectedRoute>
                <UserHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/event/:eventId"
            element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/all-events"
            element={
              <ProtectedRoute>
                <UserAllEvents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/my-events"
            element={
              <ProtectedRoute>
                <UserMyEvents />
              </ProtectedRoute>
            }
          />

          <Route
            path="/events"
            element={
                <Events />
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

      </main>
    </div>
  );
}
