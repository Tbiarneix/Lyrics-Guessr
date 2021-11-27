// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import '../style/Result.css';
import '../style/Home.css';

const Result = ({ totalScore }) => {
    // const [congratulation, setCongratulation] = useState("");
    let congratulation = "";

    if (totalScore === 100) {
        congratulation = "Parfait ! Tu es beaucoup trop chaud !"   
    } else if (totalScore > 59) {
        congratulation = "Tu es balèze de ouf ! Bravo !"     
    } else if (totalScore > 39) {
        congratulation = "Plutôt pas mal ! Bien joué !"    
    } else if (totalScore > 19) {
        congratulation = "C'est pas terrible... Tu feras mieux la prochaine fois !"  
    } else {
        congratulation = "Nul ! Nul ! Nul ! Tu es obligé de rejouer pour laver cet échec !"     
    };

    return (
        <div>
            <Header />
            <div className="container">
            <h1>Votre score est de {totalScore} !</h1>
            <h2>{congratulation}</h2>
            <NavLink exact to='/game'><button className="play" type="button" >Rejouer</button></NavLink>
            </div>
        </div>
    );
}

export default Result;