import { Transition } from "@headlessui/react";
import { Link, Redirect } from "react-router-dom";

export default function RedirectMenu(props) {
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
        } rounded-lg shadow-lg w-max pt-0.5 z-50`}
      >
        {props.menuItems.map((item, index) => {
          return (
            <Link to="" key={index}>
              <div
                className="text-left p-3 font-medium flex items-center hover:bg-blue-50 hover:shadow-md border-b border-primary-light bg-white z-50"
                onClick={() => {window.location.href=item.link}}
              >
                {item.svgPath && (
                  <img
                    alt="MenuImage"
                    src={item.svgPath}
                    className="w-6 h-6"
                  ></img>
                )}
                <span className="ml-3">{item.value}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Transition>
  );
}
