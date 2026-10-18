import { Suspense, useState } from "react"
import Navbar from "./componants/Navbar"
import Banner from "./componants/Banner"
import Footer from "./componants/Footer"
import Technologies from "./componants/Technologies"
import AuthModal from "./componants/AuthModal"
import type { ITechnologie } from "./type"

const technologiesFetch = async (): Promise<ITechnologie[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {
  const technologiesPromise = technologiesFetch();
  const [stack, setStack] = useState<ITechnologie[]>([]);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"signin" | "signup">("signin");

  const handleSignInClick = () => {
    setAuthModalMode("signin");
    setAuthModalOpen(true);
  };

  const handleSignUpClick = () => {
    setAuthModalMode("signup");
    setAuthModalOpen(true);
  };

  return (
    <>
      <Navbar onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
      <Banner/>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} stack={stack} setStack={setStack}></Technologies>
      </Suspense>
      <Footer/>
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </>
  )
}

export default App
