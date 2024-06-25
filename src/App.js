import React from "react";
import CityDropdown from "./Components/Header/Citydropdown";
import Header from "./Components/Header/header";

// import SearchBar from "./Components/Header/searchbar";

function App() {
  return (
    <div>
      <Header />
      <CityDropdown/>
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;
