import Footer from "@/src/components/shared/footer/Footer";
import Navbar from "@/src/components/shared/navbar/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body>
          <header>
            <Navbar />
          </header>
          <main className=" min-h-screen relative">{children}</main>
          <footer>
            <Footer />{" "}
          </footer>
        </body>
      </html>
    </>
  );
};

export default MarketingLayout;
