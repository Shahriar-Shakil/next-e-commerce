import React, { useState, useRef } from "react";
// import classnames and useOnClickOutside
import { useOnClickOutside } from "use-hooks";
import cn from "classnames";
import { BiChevronDown } from "react-icons/bi";

type Props = {
  options: Array<any>;
};
const DropdownReact = ({ options }: Props) => {
  const [selected, setSelected] = useState(options?.[0]);
  // add a state to toggle the dropdown
  const [open, setOpen] = useState(Boolean);

  //close the dropdown when clicking outside the referenced element
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  //onclick handler when clicking a menu item
  const handleClick = (item: any) => {
    setOpen(false);
    setSelected(item);
  };
  return (
    <>
      <div
        // add toggle dropdown-open
        className={cn({
          dropdown: true,
          "dropdown-open": open,
        })}
        // add reference to the dropdown element
        ref={ref}
      >
        <label
          tabIndex={0}
          className="text-xs cursor-pointer leading-6 text-black font-500 flex items-center"
          // toggle open when the button is clicked.
          onClick={() => setOpen((prev) => !prev)}
        >
          <span> {selected}</span> <BiChevronDown size={24} />
        </label>
        <ul
          tabIndex={0}
          // add hidden class when the dropdown is not open
          className={cn({
            "dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 z-50":
              true,
            hidden: !open,
          })}
        >
          {options?.map((item) => (
            <li onClick={() => handleClick(item)} key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownReact;
