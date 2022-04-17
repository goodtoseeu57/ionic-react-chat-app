import { RefObject, useEffect, useRef, useState } from "react";


const useOnScreen = (ref: RefObject<HTMLElement | null>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null)
  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef!.current!.observe(ref.current as any);

    return () => {
      observerRef!.current!.disconnect();
    };
  }, [ref]);

  return isOnScreen;

}

export default useOnScreen;
