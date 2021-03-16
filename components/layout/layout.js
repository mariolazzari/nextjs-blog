import MainNavigation from "./main-navigation";

const Layout = props => (
  <>
    <MainNavigation />
    <main>{props.children}</main>
  </>
);

export default Layout;
