import { useNavigate } from "react-router-dom";

type PersonalizedHeaderProps = {
    name: string;
    profilePicture: string;
}

function PersonalizedHeader({name, profilePicture}: PersonalizedHeaderProps) {
    const navigate = useNavigate();
    return ( 
        <div className="mb-0 flex items-center">
            <div>
                <h2 className="font-semibold text-2xl mt-6">Welcome Back</h2>
                <h3 className="leading-7 font-sans text-purple-900 font-normal capitalize">{name}</h3>
            </div>
            <img onClick={()=> navigate("/profile")} src={profilePicture} alt="Profile icon" className="w-12 h-12 ml-auto rounded-full mr-2 mt-4" />
        </div>
    );
}

export default PersonalizedHeader;