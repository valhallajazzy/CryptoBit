import { useEffect, useRef} from 'react'

export const useOnClickOutside = handler => {

	let ref = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return ref;
}
