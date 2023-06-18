import Navigation from '../components/Navigation';

const Home = () => {
  const jumbotronStyle = {
    backgroundImage: "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701333164-optimized.jpg')",
    height: '100vh',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div>
      <header>
        {/* <!-- Navbar --> */}
        <Navigation></Navigation>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
          style={jumbotronStyle}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={overlayStyle}
          >
            <div className="flex h-full items-center justify-center">
              { <div className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-50 to-emerald-500">
                <h2 className="mb-4 text-4xl font-serif">
                  PERPUSTAKAAN STIMATA{' '}
                </h2>
                <h4 className="mb-2 text-xl font-serif">MALANG</h4>
                <p className="mb-6 text-xl font-serif">
                Pandanwangi, Kec. Blimbing,
                  Kota Malang, Jawa Timur 65126
                </p>
              </div> }
 
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;