import Header from "./common/Header";
import Main from "./common/Main";
import Footer from "./common/Footer";

export const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Main />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
