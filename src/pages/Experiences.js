import React, {useEffect} from 'react';
import JobCard from "../components/JobCard";

function Experiences() {
    useEffect(() => {
        document.title = "Expériences";
    }, []);
    return (
        <div>
            <h3>Mes expériences professionelles</h3>
            <div className="cardHolder experiences">
                <JobCard company_image={"rda.png"} company_name={"Royaume des Arbres"} contract_type={"CDD"} duration={"Août"} year={"2024"} role={"Opérateur"}/>
                <JobCard company_image={"sensia.png"} company_name={"Sensia"} contract_type={"Stage"} duration={"Avril - Juin"} year={"2024"} role={"Développeur"}/>
                <JobCard company_image={"rda.png"} company_name={"Royaume des Arbres"} contract_type={"CDD"} duration={"Juillet - Août"} year={"2023"} role={"Opérateur"}/>
                <JobCard company_image={"rda.png"} company_name={"Royaume des Arbres"} contract_type={"CDD"} duration={"Juillet - Août"} year={"2022"} role={"Opérateur"}/>
            </div>
        </div>
    );
}

export default Experiences;