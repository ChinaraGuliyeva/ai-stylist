import girl from '../assets/devushka.jpg';

export const Dashboard = () => {
    return (
        <div className="d-flex">
            <div className="col-md-6 description">
                <h1 className="mb-3">AI stylist</h1>
                <p>An AI-powered project for clothing recognition and wardrobe matching.</p>

                <p>This is a purely educational project with no commercial intent. The idea and implementation are entirely my own. My goal was to understand the technical process of training neural networks locally, identify potential challenges, and estimate the required resources. </p>

                <p><a href="https://github.com/ChinaraGuliyeva/ai-stylist">Project Repository </a>. Feel free to contact me via email at <a href="mailto:ichinara@gmail.com">ichinara@gmail.com</a> if you have any questions. </p>
            </div>
            <div className="col-md-6 ms-5">
                <img className="dashboard-img" src={girl}/>
            </div>
        </div>
    );
};