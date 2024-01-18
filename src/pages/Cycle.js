import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Cycle = () => {
  return (
    <>
      <Navbar />
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Cycle Tracker</title>
        <link rel="stylesheet" href="style.css" />
        <h1 className="text-center">Period tracker</h1>
        <form>
          <fieldset className="text-center">
            <legend>Enter your period start and end date</legend>
            <p>
              <label htmlFor="start-date">Start date : </label>
              <input type="date" id="start-date" required />
            </p>
            <p>
              <label htmlFor="end-date">End date : </label>
              <input type="date" id="end-date" required />
            </p>
          </fieldset>
          <p className="text-center">
            <button type="submit">Add Period</button>
          </p>
        </form>

        <script src="app.js" defer></script>
      </div>

      <Footer />
    </>
  );
};

export default Cycle;
