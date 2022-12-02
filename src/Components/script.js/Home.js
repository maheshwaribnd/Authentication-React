import '../style.css/Home.css'
import logo from '../Assests/logo';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

const Home = () => {
    
    // const navigate = useNavigate();

    // useEffect(() => {

    //     const data = window.localStorage.getItem("userData");
    //     const user_data = JSON.parse(data);

    //     if (user_data.random) {
    //         navigate("/profile");
    //     }
    //     else {
    //         navigate("/signUp");
    //     }
    // }, [])

    return (
        <div className="home">
            <h2>What is Authentication ?</h2><br/>
            <p>Authentication is the process of uniquely identifying an individual via a set of credentials. In the
                digital world, authentication is termed as verifying a person's identity or an electronic device.
                Authentication becomes necessary because it increases the security of consumer's data. Without verifying
                or authenticating oneself, no one can enter the website and access your data. The most popular example
                of authentication is entering into a system using login credentials. With the huge increase in the
                number of digital platforms, the demand for various authentication processes has been increasing for
                both online and physical systems.
            </p><br/>
            <div className="description">
                <img src={logo} style={{marginRight: '12%', width:'300px', height:'300px' }} />
                <p>Authentication can be divided into two major categories. <br/><br/>
                    1. Human to Machine Authentication <br/>
                    2. Machine to Machine Authentication
                </p>
            </div><br/><br/>
            <p>In any of the above types of authentication, there is a requirement for certain credentials. In human
                verification, we have a user ID and password Set by the consumer, while for machines, we have
                certificates and IP addresses, along with other information.Generally, a consumer has to select or
                create a User ID and corresponding password for that unique ID that the system will use to verify user
                credibility. Many companies make use of authentication to verify the users who try to login into their
                digital platforms. But if consumers' data falls into cybercriminals' hands, it can cause some severe
                problems. Hence companies ensure using high-level security measures, which involves using another
                advanced authentication level such as multi-factor authentication.
            </p>
        </div>
    );
}

export default Home;