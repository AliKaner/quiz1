import React from "react";

export type Time = {
    second: number;
    minute: number;
}

const timepass = () => {

}
const Timer: React.FC<Props> = ({
    second,
    minute,
}) => (
    <div>
    <div>
        {minute}:{second}
    </div>
    </div>

)
