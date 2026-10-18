import { useState, useEffect } from "react";
import { signIn, signUp } from "../lib/auth-client";
import { Bounce, toast } from "react-toastify";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialMode?: "signin" | "signup";
}

const AuthModal = ({ isOpen, onClose, onSuccess, initialMode = "signin" }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsSignUp(initialMode === "signup");
  }, [initialMode]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      if (!name.trim()) {
        toast.warn("Please enter your name", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
        setLoading(false);
        return;
      }
      await signUp.email(
        {
          email,
          password,
          name,
        },
        {
          onSuccess: () => {
            toast.success("Account created successfully! Welcome aboard! 🎉", {
              position: "top-right",
              autoClose: 3000,
              theme: "colored",
              transition: Bounce,
            });
            resetForm();
            onSuccess();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Sign up failed. Please try again.", {
              position: "top-right",
              autoClose: 4000,
              theme: "colored",
              transition: Bounce,
            });
          },
        }
      );
    } else {
      await signIn.email(
        {
          email,
          password,
        },
        {
          onSuccess: () => {
            toast.success("Welcome back! 👋", {
              position: "top-right",
              autoClose: 3000,
              theme: "colored",
              transition: Bounce,
            });
            resetForm();
            onSuccess();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Invalid email or password.", {
              position: "top-right",
              autoClose: 4000,
              theme: "colored",
              transition: Bounce,
            });
          },
        }
      );
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md mx-4 bg-gray-400 rounded-3xl shadow-2xl border border-gray-600 overflow-hidden animate-[modalSlideIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient header bar */}
        <div className="h-1.5 bg-brand-gradient w-full" />

        <div className="p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-800 hover:text-black transition-colors text-xl font-bold"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {isSignUp
                ? "Join DevStack and build your ideal stack"
                : "Sign in to access your saved stack"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field — sign up only */}
            {isSignUp && (
              <div className="relative">
                <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg" />
                <input
                  id="auth-name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-500 border border-gray-700 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg" />
              <input
                id="auth-email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-500 border border-gray-700 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg" />
              <input
                id="auth-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-500 border border-gray-700 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                required
                minLength={8}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-brand-gradient text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                  {isSignUp ? "Creating Account..." : "Signing In..."}
                </>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-xs text-slate-500 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Toggle sign-in / sign-up */}
          <p className="text-center text-sm text-slate-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                resetForm();
              }}
              className="font-semibold bg-brand-gradient bg-clip-text text-transparent hover:underline transition-all"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
