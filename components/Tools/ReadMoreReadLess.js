import { useState } from "react";
export default function ReadMoreReadLess({ children, className, max }) {
  const [isReadMoreShow, setReadMoreShow] = useState(false);
  const toggle = () => {
    setReadMoreShow((prevState) => !prevState);
  };
  return (
    <div>
      <p className={className}>
        {isReadMoreShow ? children : children.substr(0, max)}
      </p>
      {children.length > max ? (
        <button onClick={toggle} className=" font-medium text-lg">
          ...
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
