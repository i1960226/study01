// const Hello = function () {
//     <p>Hello</p>
// }

import World from "./World";
import "./Hello.css";

// const Hello = () => {
//     <p>Hello</p>
// }

// export default Hello;

export default function Hello() {
    return (
        <div>
            <h1 style={
                {
                    color: "red",
                    borderRight: "2px solid #000",
                    marginBottom: "30px",
                }
            }
            >Hello</h1>
            <World />
            <World />
            </div>
    );
};
