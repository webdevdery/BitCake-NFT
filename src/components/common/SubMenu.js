import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { userSelector } from "../../redux/auth/selector";
import { useSelector } from "react-redux";

export default function SubMenu(props) {
  const user = useSelector(userSelector);
  return (
    <Transition
      show={props.isShow}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`absolute top-full ${
          props.orientation === "right" ? "left-0" : "right-0"
        } rounded-b-lg shadow-dark w-max mt-1 z-50 overflow-hidden`}
      >
        {props.menuItems.map((item, index) => {
          return (
            <Link to={item.link} key={index} className="bg-red">
              {item.value != "Logout" && (
                <div className="text-left p-3 font-medium flex items-center hover:bg-blue-50 hover:shadow-md border-b border-primary-light bg-white z-50">
                  {item.svgPath && (
                    <img
                      alt="MenuImage"
                      src={item.svgPath}
                      className="w-6 h-6"
                    ></img>
                  )}
                  <span className="ml-3">{item.value}</span>
                </div>
              )}
              {item.value == "Logout" && user.address && (
                <div className="text-left p-3 font-medium flex items-center hover:bg-blue-50 hover:shadow-md border-b border-primary-light bg-white z-50">
                  {item.svgPath && (
                    <img
                      alt="MenuImage"
                      src={item.svgPath}
                      className="w-6 h-6"
                    ></img>
                  )}
                  <span className="ml-3">{item.value}</span>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </Transition>
  );
}
