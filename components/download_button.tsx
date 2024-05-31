import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type DownloadButtonProp = {
  path: string
}
export default function DownloadButton({path} : DownloadButtonProp) {
  return (
      <a target="_blank" className={"btn btn-neutral"}
         href={ "/markdowns/" + path }><FontAwesomeIcon className={"pr-2"} icon={faDownload}/>Download .md</a>
  )
}