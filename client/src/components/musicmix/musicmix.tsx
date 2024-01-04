// import { useEffect, useState } from "react";

const categoryMapping = {
  "Ordinary Drink": "Standard Splash",
  Cocktail: "Cocktail Creations",
  Shake: "Shake It Up",
  "Other / Unknown": "Mystery Mix",
  Cocoa: "Cocoa Comfort",
  Shot: "Snap Shot",
  "Coffee / Tea": "Brew Harmony",
  "Homemade Liqueur": "DIY Spirit",
  "Punch / Party Drink": "Party Potion",
  Beer: "Beer Necessity",
  "Soft Drink": "Soft Sip",
};

const MusicMix: React.FC = () => {
  const categoryLinks = Object.keys(categoryMapping).map((category, index) => (
    <li key={index}>
      <a href={`http://localhost:8080/api/cocktailsByCategory/${category} `}>
        {categoryMapping[category as keyof typeof categoryMapping]}
      </a>
    </li>
  ));

  return (
    <div>
      <h1>Music Mix</h1>
      <p>Choose your cocktail and we will match it with the perfect music</p>

      <h2>Categories</h2>
      <ul>{categoryLinks}</ul>
    </div>
  );
};

export default MusicMix;
