import { useNavigate } from "react-router-dom";

type EventTypeHeaderProps = {
    name: string;
    type: string;
}

function EventTypeHeader({name, type}: EventTypeHeaderProps) {
    const navigate = useNavigate();
    const handleSeeMore = () => {
        if (type === "joined") {
            navigate("/events");
            return;
        }
        navigate(`/search/${type}`);
    }

    return ( 
    <div className="flex justify-between">
        <h3 className="leading-7 font-sans font-normal mt-5">{name}</h3>
        <a onClick={()=> handleSeeMore()} className="text-sm text-purple-900 mt-auto">See More</a>
    </div> 
);
}

export default EventTypeHeader;