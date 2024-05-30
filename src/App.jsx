import "./styles/style.css";
import Hero from "./componments/Hero";
import Footer from "./componments/Footer";
import Navbar from "./componments/Navbar";
import Services from "./componments/Services";
import Tours from "./componments/Tours";
import About from "./componments/About";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Backroads || Tour Company</title>
      {/* favicon */}
      <link
        rel="shortcut icon"
        href="./images/favicon.ico"
        type="image/x-icon"
      />
      {/* font-awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css"
        integrity="sha512-c93ifPoTvMdEJH/rKIcBx//AL1znq9+4/RmMGafI/vnTFe/dKwnn1uoeszE2zJBQTS1Ck5CqSBE+34ng2PthJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      {/* styles css */}
      <link rel="stylesheet" href="./css/styles.css" />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
