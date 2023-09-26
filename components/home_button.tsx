import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HomeButton() {
  return (
      <a className={"py-2 px-4 rounded shadow w-fit bg-gray-200 text-gray-600 font-bold hover:bg-gray-300 hover:text-gray-700"}
         href={"/"}><FontAwesomeIcon className={"pr-2"} icon={faHouse}/>Back to home</a>
  )
}