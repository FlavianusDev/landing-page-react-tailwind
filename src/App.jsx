// 1. Impor komponen utama Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 2. Impor ikon TikTok dari paket khusus brand/merek
import {
  faTiktok,
  faFacebook,
  faInstagram,
  faYoutube,
//   faBars,
} from "@fortawesome/free-brands-svg-icons";
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {

    // const hamburger = document.querySelector('.hamburger-menu');
    // const menu = document.querySelector('.menu');

    // hamburger.addEventListener('click', displayMenu );

    // menu.addEventListener('click', displayMenu );

    // function displayMenu() {
    //     if (menu.classList.contains('absolute')) {
    //         menu.classList.add('hidden');


            
    //         menu.classList.remove('absolute');
    //         menu.classList.remove('top-14');
    //         menu.classList.remove('w-full');
    //         menu.classList.remove('left-0');
    //         menu.classList.remove('bg-slate-800');
    //         menu.classList.remove('divide-gray-900');
    //         menu.classList.remove('divide-y')
    //     } else {
    //         menu.classList.add('hidden');

    //         menu.classList.add('absolute');
    //         menu.classList.add('top-14');
    //         menu.classList.add('w-full');
    //         menu.classList.add('left-0');
    //         menu.classList.add('bg-slate-800');
    //         menu.classList.add('divide-gray-900');
    //         menu.classList.add('divide-y');
    //     }
        
    // }


  return (
    <>
      {/* // header */}
      <header className="bg-gray-900 sticky top-0">
        <nav className="text-white w-11/12 md:container mx-auto py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold">
            Tailsimple
          </a>
          <ul className="menu hidden md:flex bg-gray-900 md:relative md:top-0 md:w-auto md:left-0 md:bg-transparent md:divide-y-0 divide-gray-900 divide-y ">
            <li className="px-7 py-1 hover:text-gray-500 cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="px-7 py-1 hover:text-gray-500 cursor-pointer">
              <a href="#portofolio">Portofolio</a>
            </li>
            <li className="px-7 py-1 hover:text-gray-500 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="px-7 py-1 hover:text-gray-500 md:hover:text-white cursor-pointer">
              <a
                href="#"
                className="md:border-2 md:border-red-500 md:py-2 md:px-5 rounded-xl md:hover:bg-red-500 text-white"
              >
                Getting Started
              </a>
            </li>
          </ul>

          <button className="hamburger-menu text-2xl md:hidden cursor-pointer">
                  <FontAwesomeIcon icon={faBars}/>
          </button>
          
          
{/* 
          <button>
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              style={{ color: "#ffffff" }}
              className="md:hidden absolute top-5 right-5"
            />
          </button> */}
        </nav>
      </header>

      {/* // hero */}
      <section className="bg-gray-900">
        <div className="container mx-auto text-center text-white h-screen flex items-center">
          <div className="mx-auto w-3/4 md:w-2/4">
            <h3 className="text-5xl font-bold text-center mb-5">
              Bring Your Business To Next Level
            </h3>
            <p className="text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              cum, perspiciatis veritatis ipsum quisquam amet alias sed est sunt
              obcaecati voluptas ab praesentium atque vero laudantium
              voluptates, reiciendis consectetur labore.
            </p>
            <a
              href="#portofolio"
              className="bg-red-500 text-white py-2 px-5 rounded-xl hover:bg-red-800"
            >
              See All Portofolio
            </a>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="bg-gray-200 py-20">
        <div className="w-11/12 md:container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-5">Our Services</h3>
          <p className="text-gray-500 text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            ratione!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* sevice 1 */}
            <div className="flex space-x-5 py-8 px-8 bg-white rounded-xl shadow-md items-start">
              <img src="https://placehold.co/100x100" />
              <div>
                <h4 className="text-2xl font-bold mb-5">Data Analytic</h4>
                <p className="text-gray-500 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat consequuntur numquam adipisci esse aliquam minus.
                </p>
                <a href="#" className="hover:text-gray-500">
                  read more
                </a>
              </div>
            </div>
            {/* sevice 2 */}
            <div className="flex space-x-5 py-8 px-8 bg-white rounded-xl shadow-md items-start">
              <img src="https://placehold.co/100x100" />
              <div>
                <h4 className="text-2xl font-bold mb-5">
                  Social Media Marketing
                </h4>
                <p className="text-gray-500 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat consequuntur numquam adipisci esse aliquam minus.
                </p>
                <a href="#" className="hover:text-gray-500">
                  read more
                </a>
              </div>
            </div>
            {/* sevice 3 */}
            <div className="flex space-x-5 py-8 px-8 bg-white rounded-xl shadow-md items-start">
              <img src="https://placehold.co/100x100" />
              <div>
                <h4 className="text-2xl font-bold mb-5">
                  Developer & Maintenance
                </h4>
                <p className="text-gray-500 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat consequuntur numquam adipisci esse aliquam minus.
                </p>
                <a href="#" className="hover:text-gray-500">
                  read more
                </a>
              </div>
            </div>
            {/* sevice 4 */}
            <div className="flex space-x-5 py-8 px-8 bg-white rounded-xl shadow-md items-start">
              <img src="https://placehold.co/100x100" />
              <div>
                <h4 className="text-2xl font-bold mb-5">24/7 Support</h4>
                <p className="text-gray-500 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat consequuntur numquam adipisci esse aliquam minus.
                </p>
                <a href="#" className="hover:text-gray-500">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portofolio */}
      <section id="portofolio" className="py-20 bg-white">
        <h3 className="text-5xl font-bold text-center mb-5">Portofolio</h3>
        <p className="text-gray-500 text-center mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
          cumque!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-6">
          {/* portofolio items */}
          <div className="shadow-xl">
            <a href="#">
              <img
                src="https://placehold.co/400x300"
                alt="Project 1"
                className="w-full h-auto"
              />
              <div className="py-3 px-5">
                <h4 className="text-center font-bold">Website 1</h4>
              </div>
            </a>
          </div>
          {/* portofolio items */}
          <div className="shadow-xl">
            <a href="#">
              <img
                src="https://placehold.co/400x300"
                alt="Project 1"
                className="w-full h-auto"
              />
              <div className="py-3 px-5">
                <h4 className="text-center font-bold">Website 2</h4>
              </div>
            </a>
          </div>
          {/* portofolio items */}
          <div className="shadow-xl">
            <a href="#">
              <img
                src="https://placehold.co/400x300"
                alt="Project 1"
                className="w-full h-auto"
              />
              <div className="py-3 px-5">
                <h4 className="text-center font-bold">Website 3</h4>
              </div>
            </a>
          </div>
          {/* portofolio items */}
          <div className="shadow-xl">
            <a href="#">
              <img
                src="https://placehold.co/400x300"
                alt="Project 1"
                className="w-full h-auto"
              />
              <div className="py-3 px-5">
                <h4 className="text-center font-bold">Website 4</h4>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="w-11/12 md:container mx-auto py-20" id="about">
        <div className="flex space-x-10 items-start">
          <img src="https://placehold.co/300" className="w-2/4 md:w-1/3" alt="" />
          <div>
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              aspernatur.
            </p>
            <h3 className="text-5xl font-bold mb-5">About Tailsimple</h3>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              debitis, suscipit eius repellendus hic asperiores culpa nesciunt,
              placeat id ipsum ex. Inventore tempora amet distinctio alias quae
              id quaerat ad.
            </p>
            <p className="mb-5 pb-5 border-b border-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              debitis, suscipit eius repellendus hic asperiores culpa nesciunt,
              placeat id ipsum ex. Inventore tempora amet distinctio alias quae
              id quaerat ad.
            </p>
            <ul className="md:flex md:space-x-5">
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                  Tiktok
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-5 text-center font-bold">
        &copy; 2026 Tailsimple. All rights reserved.
      </footer>
    </>
  );
}

export default App;
