import {faArrowLeft, faHouse} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HomeButton() {
    return (

        <a className={"btn btn-ghost my-4"}
           href={"/"}>
            <FontAwesomeIcon className={"pr-2"} size={"sm"} icon={faHouse}/>
            Back to home

        </a>


    )
}