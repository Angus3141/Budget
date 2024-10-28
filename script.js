// Variables
let balance = 5; // Start with an initial balance of $5
let score = 0;
let initialNegativeScenarios = [
    { text: "You spend $15 on a new game.", change: -15 },
    { text: "You donate $5 to charity.", change: -5 },
    { text: "Unexpected expense: car repairs cost $35.", change: -35 },
];
let availableScenarios = [
    { text: "You find $12 on the ground.", change: 12 },
    { text: "You lose $8 from your wallet.", change: -8 },
    { text: "You win a $25 prize in a competition.", change: 25 },
    { text: "You buy lunch for $7.", change: -7 },
    { text: "You get $20 for your birthday.", change: 20 },
    { text: "You earn $10 doing chores.", change: 10 },
    { text: "You have to pay $40 to fix a broken window.", change: -40 },
    { text: "You lend $10 to a friend.", change: -10 },
    { text: "You receive $50 from a family member.", change: 50 },
    { text: "You pay a $20 fine.", change: -20 },
    { text: "You earn $18 babysitting.", change: 18 },
    { text: "You
