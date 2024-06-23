import React,{useState} from "react";
import "./header.css";

const cityDropdown = () => {
    const [selectedCity, setSelectedCity] = useState('');
        const cities = [
            "Bangalore",
            "Hyderabad",
            "Chennai",
            "Chandigarh",
            "Delhi",
            "Noida",
            "Gurugram",
        ];

        const handleCityChange = (event) =>{
            setSelectedCity(event.target.value);
        };
                 
        return (
            <div>
                {/* <label htmlFor="city-select">Choose a city:</label> */}
                <select id="city-select" value={selectedCity} onChange={handleCityChange}>
                    {/* <option value="">--Please choose a city--</option> */}
                    {cities.map((city,index)=>(
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                {/* {selectedCity && <p>You have selected: {selectedCity}</p>} */}
                </div> 
                )   
            }
export default cityDropdown;