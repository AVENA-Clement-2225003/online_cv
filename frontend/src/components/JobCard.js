import React from 'react';

function JobCard({ company_image, company_name, contract_type, role, duration, year }) {
    return (
        <div className={"jobCard"}>
            <p className="jobCardType">{contract_type}</p>
            <div>
                <div className={"jobCardCompanyInfo"}>
                    <img className="jobCardImg" alt={"Job card informations"} src={`/${company_image}`}/>
                    <div>
                        <p className="jobCardName">{company_name}</p>
                        <p className="jobCardRole">{role}</p>
                    </div>
                </div>
                <div className={"jobCardDateHolder"}>
                    <p className="jobCardDuration">{duration}</p>
                    <p className="jobCardYear">{year}</p>
                </div>
            </div>
        </div>
    );
}

export default JobCard;