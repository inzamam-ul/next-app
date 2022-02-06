import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer.js";
import HeaderLinks from "./Header/HeaderLinks";
import { useRouter } from "next/router";

const Layout = ({ children, ...rest }) => {
  const dashboardRoutes = [];
  const router = useRouter();

  return (
    <div>
      <Header
        color={router.route !== "/" ? "" : "transparent"}
        routes={dashboardRoutes}
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
