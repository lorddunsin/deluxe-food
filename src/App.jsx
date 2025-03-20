import Auth from "./Component/AuthenticationPage/Auth";
import ForgetPassowrd from "./Component/AuthenticationPage/Pages/ForgetPassowrd";
import Login from "./Component/AuthenticationPage/Pages/Login";
import ResetPassword from "./Component/AuthenticationPage/Pages/ResetPassword";
import SIgnUp from "./Component/AuthenticationPage/Pages/SIgnUp";
import Setting from "./Component/MianPages/Features/Setting";
import AboutUs from "./Component/MianPages/Features/SettingFeatures/AboutUs";
import ChangePassword from "./Component/MianPages/Features/SettingFeatures/ChangePassword";
import ChangeUsername from "./Component/MianPages/Features/SettingFeatures/ChangeUsername";
import CustomerCare from "./Component/MianPages/Features/SettingFeatures/CustomerCare";
import Faq from "./Component/MianPages/Features/SettingFeatures/Faq";
import History from "./Component/MianPages/Features/SettingFeatures/History";
import Privacy from "./Component/MianPages/Features/SettingFeatures/Privacy";
import FoodShop from "./Component/MianPages/FoodShop";
import LandingPage from "./Component/MianPages/LandingPage";
import { Route, Routes } from "react-router-dom";
import ProtectedRout from "./Component/ProtectedRout";
import EmailNotification from "./Component/AuthenticationPage/Pages/EmailNotification";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foodshop" element={<FoodShop />} />

        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SIgnUp />} />
          <Route path="forget-password" element={<ForgetPassowrd />} />
          <Route path="email-note" element={<EmailNotification />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route
          path="/setting"
          element={
            <ProtectedRout>
              <Setting />
            </ProtectedRout>
          }
        >
          <Route path="history" element={<History />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="change-username" element={<ChangeUsername />} />
          <Route path="faq" element={<Faq />} />
          <Route path="customer-care" element={<CustomerCare />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
