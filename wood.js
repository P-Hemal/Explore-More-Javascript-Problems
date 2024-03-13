function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 7;
    const perTableWood = 12;
    const perBedWood = 34;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;
    const totalWood = chairWood + tableWood + bedWood;
    return (totalWood);
}

const totalWood = woodCalculator(0, 0, 2)
console.log('Total Wood Required :', totalWood);

