import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type DownloadButtonProp = {
  path: string
}
export default function DownloadButton({path} : DownloadButtonProp) {
  return (
      <a target="_blank" className={"py-2 px-4 inline-block rounded shadow w-fit bg-gray-500 text-gray-100 font-bold hover:bg-gray-600 hover:text-gray-0"}
         href={ "/markdowns/" + path }><FontAwesomeIcon className={"pr-2"} icon={faDownload}/>Download .md</a>
  )
}