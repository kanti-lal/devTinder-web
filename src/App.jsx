import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import CancellationAndRefund from "./components/CancellationAndRefund";
import ShippingAndDelivery from "./components/ShippingAndDelivery";
import ContactUs from "./components/ContactUs";
import AuthGuard from "./components/AuthGuard";
import Premium from "./components/Premium";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route
              path="/"
              element={
                <AuthGuard>
                  <Feed />
                </AuthGuard>
              }
            />
            <Route
              path="/login"
              element={
                <AuthGuard requireAuth={false}>
                  <Login />
                </AuthGuard>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthGuard>
                  <Profile />
                </AuthGuard>
              }
            />
            <Route
              path="/connections"
              element={
                <AuthGuard>
                  <Connections />
                </AuthGuard>
              }
            />
            <Route
              path="/requests"
              element={
                <AuthGuard>
                  <Requests />
                </AuthGuard>
              }
            />

            <Route
              path="/premium"
              element={
                <AuthGuard>
                  <Premium />
                </AuthGuard>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route
              path="/cancellation-refund"
              element={<CancellationAndRefund />}
            />
            <Route
              path="/shipping-delivery"
              element={<ShippingAndDelivery />}
            />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
