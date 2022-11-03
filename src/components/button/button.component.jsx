import { ReactComponent as LoadingIcon } from "./loadingIcon.svg";
import { ReactComponent as AddingIcon } from "./addingIcon.svg";
import { ReactComponent as DeleteIcon } from "./deleteIcon.svg";

const Button = ({ children, icon = "none", buttonStyle = "default", ...props }) => {
  const CONFIG = {
    style: {
      load: "bg-blue-500 text-slate-50 hover:bg-blue-200 hover:text-blue-500 focus:ring-indigo-500",
      add: "bg-green-500 text-slate-50 hover:bg-green-200 hover:text-green-500 focus:ring-indigo-500 rounded-l-md",
      delete: "bg-red-500 text-slate-50 hover:bg-red-200 hover:text-red-500 focus:ring-indigo-500 rounded-r-md",
    },
    icon: {
      none: "",
      loading: <LoadingIcon className="w-6"/>,
      adding: <AddingIcon className="w-6" />,
      delete: <DeleteIcon className="w-6" />,
    }
  };
  return (
      <button
        className={`inline-flex items-center justify-center p-2  focus:outline-none focus:ring-2 focus:ring-inset ${CONFIG['style'][buttonStyle]}`}
        {...props}
      >
        { CONFIG['icon'][icon] } { children }
      </button>
  );
};

export default Button;
