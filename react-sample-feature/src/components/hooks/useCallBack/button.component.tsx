import React from "react";

const Button = (props: any) => {
  const { handleClick, children } = props;
  console.log(`Rendering button - `, children);
  return <button onClick={handleClick}>{children}</button>;
};

// export default Button;
export default React.memo(Button);
