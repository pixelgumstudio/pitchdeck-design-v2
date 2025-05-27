"use client";
import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useStore } from "../store/useStore";
import { useCookies } from "react-cookie";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [ , setCookie ] = useCookies([
    "user",
    "token",
    "isLogged",
  ]);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  const pathname = usePathname();
  const router = useRouter();
  const { isLogged, user, setlink, setShowLogin } = useStore();
  const [visibility, setVisibility] = useState(false);

 

  const toggleNavbar = () => {
    setVisibility((prev) => !prev);
  };

  const logout = () => {
    setCookie("token", "", { path: "/" });
    setCookie("user", "", { path: "/" });
    setCookie("isLogged", false, { path: "/" });
    setlink(`/`);
    router.push("/");
  };

  const login = () => {
    toggleNavbar();
    setShowLogin(true);
  };

  return (
    <header className="w-full bg-white px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-40">
      <nav className="sticky top-0 z-10 block items-center h-[40px] my-[10px]">
        <div className="flex flex-wrap place-self-center items-center justify-between w-full laptop:max-w-[1152px] mx-auto">
          <Link
            href="/"
            className={`flex items-center w-full ${
              isLogged && isSmallScreen
                ? "max-w-[140px] mr-0"
                : "max-w-[180px] mr-3"
            } h-[37px]`}
            onClick={() => setVisibility(false)}
          >
            <Image src={"../assets/Logo.svg"} alt="Pitchdeck Design Logo" width={180} height={37} />
          </Link>
          <div className="flex items-center laptop:order-1">
            {isSmallScreen ? (
              <>
                <div className="flex items-center gap-2">
                  {isLogged && <p className="flex">{user?.userName}</p>}
                  <div className="w-6 h-6">
                    <Image
                      src={"../assets/hambugger.svg"}
                      alt="Hambugger Icon"
                      width={24}
                      height={24}
                      onClick={toggleNavbar}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                {visibility && (
                  <div className="fixed top-[60px] left-0 h-full bg-white w-full py-4 px-6 tablet:px-8">
                    <ul className="flex flex-col font-medium gap-8">
                      <li onClick={toggleNavbar}>
                        <Link
                          href="/pitchdecks"
                          className={`text-[#0A0A0A] text-sm leading-5 font-medium ${
                            pathname.includes("pitchdecks") && "text-myGreen-400"
                          }`}
                        >
                          Pitch Decks
                        </Link>
                      </li>
                      <li onClick={toggleNavbar}>
                        <Link
                          href="/make-deck"
                          className={`text-[#0A0A0A] text-sm leading-5 font-medium ${
                            pathname.includes("make-deck") && "text-myGreen-400"
                          }`}
                        >
                          Make a deck
                        </Link>
                      </li>
                      <li onClick={toggleNavbar}>
                        <Link
                          href="/template"
                          className={`text-[#0A0A0A] text-sm leading-5 font-medium ${
                            pathname.includes("template") && "text-myGreen-400"
                          }`}
                        >
                          Shop
                        </Link>
                      </li>
                      <li onClick={toggleNavbar}>
                        <Link
                          href="/blog"
                          className={`text-[#0A0A0A] text-sm leading-5 font-medium ${
                            pathname.includes("blog") && "text-myGreen-400"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>
                      <li onClick={toggleNavbar}>
                        <Link
                          href="/about-us"
                          className={`text-[#0A0A0A] text-sm leading-5 font-medium ${
                            pathname.includes("aboutus") && "text-myGreen-400"
                          }`}
                        >
                          About us
                        </Link>
                      </li>
                      {isLogged ? (
                        <div
                          className="w-fit flex items-center gap-1 cursor-pointer bg-white border border-[#D2D2CF] hover:bg-white hover:border-[#FF6464] shadow-navbarLink p-2 focus:outline-none"
                          onClick={logout}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8.5 7C6.40769 8.20445 5 10.4557 5 13.034C5 16.8812 8.13401 20 12 20C15.866 20 19 16.8812 19 13.034C19 10.4556 17.5923 8.20445 15.5 7"
                              stroke="#FF6464"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 10L12 4"
                              stroke="#FF6464"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          <p className="text-[#FF6464] text-14 leading-5 font-medium px-1">
                            Logout
                          </p>
                        </div>
                      ) : (
                        <button
                          onClick={login}
                          className="cursor-pointer w-fit bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 px-3 text-[#ffffff] text-14 leading-5 font-normal focus:outline-none"
                        >
                          Login your account
                        </button>
                      )}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <ul className="flex font-medium flex-row items-center gap-[50px] laptop:gap-[30px] desktop:gap-[50px]">
                <li>
                  <Link
                    href="/pitchdecks"
                    className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${
                      pathname.includes("pitchdecks") && "text-myGreen-400"
                    }`}
                  >
                    Pitch Decks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/make-deck"
                    className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${
                      pathname.includes("make-deck") && "text-myGreen-400"
                    }`}
                  >
                    Make a deck
                  </Link>
                </li>
                <li>
                  <Link
                    href="/template"
                    className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${
                      pathname.includes("template") && "text-myGreen-400"
                    }`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${
                      pathname.includes("blog") && "text-myGreen-400"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${
                      pathname.includes("aboutus") && "text-myGreen-400"
                    }`}
                  >
                    About us
                  </Link>
                </li>
                {isLogged ? (
                  <div className="flex items-center gap-6">
                    <p>{user?.userName}</p>
                    <div
                      className="w-fit flex items-center gap-1 cursor-pointer bg-white border border-[#D2D2CF] hover:bg-white hover:border-[#FF6464] shadow-navbarLink p-2 focus:outline-none"
                      onClick={logout}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 7C6.40769 8.20445 5 10.4557 5 13.034C5 16.8812 8.13401 20 12 20C15.866 20 19 16.8812 19 13.034C19 10.4556 17.5923 8.20445 15.5 7"
                          stroke="#FF6464"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 10L12 4"
                          stroke="#FF6464"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="text-[#FF6464] text-14 leading-5 font-medium px-1">
                        Logout
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={login}
                    className="cursor-pointer bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 px-3 text-[#ffffff] text-14 leading-5 font-normal focus:outline-none"
                  >
                    Login your account
                  </button>
                )}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;