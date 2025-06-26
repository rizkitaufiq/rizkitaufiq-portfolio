import PropTypes from "prop-types";
import Navbar from "../components/organisems/body/Navbar";

const HomepageLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="-mt-1">
        <section className="w-auto">{children}</section>
      </main>
    </div>
  );
};

HomepageLayout.propTypes = {
  children: PropTypes.node,
};

export default HomepageLayout;
