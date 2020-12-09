import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <section>
            <h2>Welcome to the Fitness app!</h2>
            <p>Here you will be able to:</p>
            <ul>
                <li><Link to="/join">Sign up</Link> for a new plan</li>
                <li>See in which one of our locations you can exercise</li>
            </ul>
        </section>
    )
}

export default HomePage;