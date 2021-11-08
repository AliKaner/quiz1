import React, {useState} from "react";

export type Time = {
    second: number;
    minute: number;
}

const [time,setTime] = useState([])

const timepass = () => {

}
const Timer: React.FC<Props> = ({
    second,
    minute,
}) => (
    <div>
        {minute}:{second}
    </div>


)
