import {Download} from "lucide-react"

type DownloadButtonProp = {
  path: string
}
export default function DownloadButton({path} : DownloadButtonProp) {
  return (
      <a target="_blank" className={"btn btn-neutral"}
         href={ "/markdowns/" + path }><Download size={16}/>Download .md</a>
  )
}