import {ArrowLeft} from "lucide-react";

export default function HomeButton() {
    return (

        <a className={"btn btn-ghost my-4"}
           href={"/"}>
            <ArrowLeft size={16}/>
            Back to home

        </a>


    )
}