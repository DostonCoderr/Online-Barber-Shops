import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import BackVideo from "/assets/BackVideo.mp4";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={BackVideo} autoPlay loop muted type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <h1 className="">Unlock Yoru Barber</h1>
          <p className="">Discover the Wold with Barbers</p>
        </div>
      </div>
      <SearchBar />
    </section>
  );
}

export default HomePage;
