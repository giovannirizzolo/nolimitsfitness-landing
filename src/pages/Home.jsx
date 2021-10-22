import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from "react";
import Header from "../components/Header";
import logoPath from '../images/solo vitruviano.svg';
import "./Home.scss";

const styles = {
    iconSize: "large"
}

const getActivityHours = () => {
    let openDate = new Date(2018, 9, 28);
    let today = new Date();

    let dateDiff = today.getTime() - openDate.getTime();
    let hoursNumber = Math.floor(dateDiff/3600000);
    // let hoursCount = new Date(dateDiff).getHours();   
    return hoursNumber.toLocaleString();
}

function Home(props) {
	return (
		<div className="home">
			<Header />
            <div className="home__logoContainer">
                <img className="header__logo" src={logoPath} alt="NoLimits vitruvian man logo"/>
            </div>
            <p className="home__mainText">La tua palestra, la tua famiglia.</p>
            <div className="home__socialContainer">
                <a href="https://www.instagram.com/nolimitsfitnessbolognetta/" rel="noreferrer" target="_blank">
                    <InstagramIcon fontSize={styles.iconSize} />
                </a>
                <a href="https://www.facebook.com/No-Limits-Fitness-Bolognetta-1843093742433837" rel="noreferrer" target="_blank">
                    <FacebookIcon fontSize={styles.iconSize}/>
                </a>
            </div>
            <div className="home__statistics-container"> 
                <div className="statistics-card">
                    <h1>350</h1>
                    <p className="info-label">Iscritti</p>
                </div>
                <div className="statistics-card">
                    <h1>{getActivityHours()}</h1>
                    <p className="info-label">Ore di attività</p>
                </div>
                <div className="statistics-card">
                    <h1>1</h1>
                    <p className="info-label">Passione comune</p>
                </div>
            </div>
		</div>
	);
}

export default Home;
