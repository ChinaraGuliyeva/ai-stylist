import { aboutHeading, aboutText } from "../textConstants";

export const About = () => {
    return (
        <div className="d-flex">
            <div className="col-md-6 ms-5">
                {/* <img className="dashboard-img" src="#" /> */}
            </div>
            <div className="col-md-6 description">
                <h1 className="mb-3">{aboutHeading}</h1>
                <>{aboutText}</>
            </div>
        </div>
    );
};