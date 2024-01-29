import img from "../assets/backGr.jpg";
import img1 from "../assets/back.jpg";
import img2 from "../assets/bookImage-removebg-preview.png";
import img3 from "../assets/backGr.jpg";

const HomeScreen = () => {
  return (
    <div className="bg-cover bg-center h-[100vh] w-[100%] flex items-center">
      <img src={img} className="w-[100%] h-[100%] object-cover absolute" />
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="text-white z-10 relative mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Unlock Your Learning Potential
        </h1>
        <p className="text-lg mb-8">
          Explore a world of knowledge with our diverse range of courses.
        </p>
        <div className="flex justify-center">
          <a
            href="auth/"
            className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="auth/login"
            className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300"
          >
            Log in
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 mb-8">
        <img
          src={img1}
          alt="Image 1"
          className="w-16 h-16 mx-2 rounded-full border-4 mb-2 border-white shadow-lg"
        />
        <img
          src={img2}
          alt="Image 2"
          className="w-16 h-16 mx-2 rounded-full border-4 mb-2 border-white shadow-lg"
        />
        <img
          src={img3}
          alt="Image 3"
          className="w-16 h-16 mx-2 rounded-full border-4 border-white shadow-lg"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
