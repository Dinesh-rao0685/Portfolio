import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import myImg from "../assets/my.jpg";

const navitems = [
  { id: 1, text: "Home" },
  { id: 2, text: "About" },
  { id: 3, text: "Experiance" },
  { id: 4, text: "Contact" },
];

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // initial hidden state
    gsap.set(menuRef.current, {
      y: "-100%",
      opacity: 0,
      display: "none",
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (menu) {
      gsap.set(menuRef.current, { display: "block" });

      gsap.to(menuRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [menu]);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between w-full shadow-lg fixed top-0 left-0 p-2 md:px-16 px-6 items-center bg-slate-100 z-50">
        <div className="flex items-center gap-3">
          <img src={myImg} className="w-12 h-12 rounded-full" alt="profile" />
          <span>
            <p className="font-bold text-xl">
              Dines<span className="text-green-500 text-2xl">h</span>
            </p>
            <p className="font-medium text-sm">Web developer</p>
          </span>
        </div>

        {/* Desktop menu */}
        <div className="md:block hidden">
          <ul className="flex gap-7 text-lg font-semibold">
            {navitems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                <Link to={text} smooth={true} duration={400} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu icon */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setmenu(!menu)}
        >
          {menu ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-slate-100 z-40 md:hidden"
      >
        <ul className="flex pt-24 justify-center items-center h-full gap-6 flex-col font-semibold text-xl">
          {navitems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 duration-200 cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={400}
                offset={-70}
                onClick={() => setmenu(false)} // click on link => menu close
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
