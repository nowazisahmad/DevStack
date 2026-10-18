import { HiMenu } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import NavLogo from "../assets/logo-text.png";
import { useSession, signOut } from "../lib/auth-client";
import { Bounce, toast } from "react-toastify";

interface NavbarProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

const Navbar = ({ onSignInClick, onSignUpClick }: NavbarProps) => {
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed out successfully!", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
            transition: Bounce,
          });
        },
      },
    });
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-700">
      <nav className="flex justify-between container mx-auto h-15 max-w-300 items-center px-4 md-20 md:px-0">
        <button className="block text-2xl text-gray-600 md:hidden transition hover:scale-[1.02]">
          <HiMenu />
        </button>
        <img
          className="h-8 w-auto md-10"
          src={NavLogo}
          alt="Navbar Logo"
        />
        <ul className="hidden items-center text-4 gap-5 md:flex">
          <li>
            <a href="#" className="text-blue-500 transition hover:text-blue-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 transition hover:text-blue-700">
              Technologies
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 transition hover:text-blue-700">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 transition hover:text-blue-700">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 transition hover:text-blue-700">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2 md:gap-3">
          {isPending ? (
            <div className="w-24 h-10 rounded-3xl bg-gray-600 animate-pulse" />
          ) : session ? (
            <>
              <div className="hidden md:flex items-center gap-2 text-slate-300 text-sm">
                <HiOutlineUserCircle className="text-xl text-sky-400" />
                <span className="max-w-[120px] truncate font-medium">
                  {session.user.name}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="btn btn-active bg-red-500 hover:bg-red-600 border-none text-white font-semibold rounded-3xl px-5 py-2 md:px-6 transition hover:scale-[1.02]"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onSignInClick}
                className="btn btn-active bg-sky-400 hover:bg-sky-500 border-none font-semibold rounded-3xl px-5 py-2 md:px-6 transition hover:scale-[1.02]"
              >
                Sign In
              </button>
              <button
                onClick={onSignUpClick}
                className="btn bg-brand-gradient border-none rounded-3xl px-5 py-2 md:px-6 transition hover:scale-[1.02]"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;