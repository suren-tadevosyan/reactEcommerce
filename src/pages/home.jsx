import Header from "./header";
import Navbar from "./navbar";
import Content from "./content";


const Page = () => {
  return (
  
      <div className="generallPage">
        <Navbar />
        <div className="container">
          <Header />
          <Content />
        </div>
      </div>

  );
};

export default Page;
