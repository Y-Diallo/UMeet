
type PersonalizedHeaderProps = {
    name: string;
    profilePicture: string;
}

function PersonalizedHeader({name, profilePicture}: PersonalizedHeaderProps) {
    return ( 
        <div className="mb-4 flex items-center">
            <div>
                <h2 className="font-semibold text-2xl mt-6">Welcome Back</h2>
                <h3 className="leading-7 font-sans text-purple-900 font-normal">{name}</h3>
            </div>
            <img src={profilePicture} alt="Profile icon" className="w-12 h-12 ml-auto rounded-full mr-2 mt-4" />
        </div>
    );
}

export default PersonalizedHeader;