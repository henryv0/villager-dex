import React from 'react';
import VillagerProfile from './VillagerProfile';

const VillagerDetails = ({ villagerData, selectedVillager }) => {
  const testData = [
    {
      message: "Here's some information on Bam:",
      name: 'Bam',
      image:
        'https://nookipedia.com/w/images/thumb/9/96/Bam_NL.png/200px-Bam_NL.png',
      quote: "Get while the getting's good.",
      gender: 'Male',
      personality: 'Jock',
      species: 'Deer',
      birthday: 'November 7th',
      sign: 'Scorpio',
      phrase:
        'booshNAkablang\nEUGreen Warm-Up Shirt[nb 1]Athletic Jacket (Green)[nb 2]UnknownUnknownUnknownUnknownN/AN/Ahttps://nookipedia.com/wiki/Bam4/16/202004/20/2020 00:59\n\n',
      clothes: 'Green Warm-Up Shirt[nb 1]Athletic Jacket (Green)[nb 2]',
      'islander-favorite': 'N/A',
      'islander-allergic': 'N/A',
      picture: 'https://nookipedia.com/w/images/1/11/BamPicACNL.png',
      siblings: 'Fourth of five',
      skill: 'Back flipping',
      goal: 'Soccer player',
      fear: 'Mummy mask',
      favclothing: 'Sporty',
      leastfavclothing: 'Traditional',
      favcolor: 'Aqua',
      'coffee-type': 'Blend',
      'coffee-milk': 'A little',
      'coffee-sugar': '1 spoonful',
      link: 'https://nookipedia.com/wiki/Bam',
      updated: '4/16/2020',
      cached: '04/20/2020 00:59',
    },
  ];

  return (
    <>
      {villagerData.map((villager) => {
        const name = villager.name.toLowerCase();

        return (
          <VillagerProfile
            key={name}
            data={villager}
            // isActive={selectedVillager}
            isActive={selectedVillager === name ? true : false}
          />
        );
      })}
    </>
  );
};

export default VillagerDetails;
