import propTypes from "react";

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      {/* <Sidebar /> */}
      <main>{children}</main>
    </div>
  );
};
const layoutStyle = {
  width: "100%",
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
export default Layout;
