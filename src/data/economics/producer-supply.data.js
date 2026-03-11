// src/data/economics/producer-supply.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const producerSupplyData = {
  subject: "Economics",
  chapter: "Producer Behaviour & Supply (Unit 11)",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u11-t1",
        title: "Production Function: Law of Variable Proportions",
        content: {
          coreConcept: `
Relates inputs to the maximum possible output.

### Law of Variable Proportions (LVP)
In the short run, if we increase one variable factor (Labor) while keeping others (Land) fixed, Total Product (TP) initially rises at an increasing rate, then at a decreasing rate, and finally falls.

- **Stage I**: TP increases at increasing rate, MP increases.
- **Stage II**: TP increases at decreasing rate, MP falls but is positive. (Best for production).
- **Stage III**: TP falls, MP becomes negative.
          `
        }
      },
      {
        id: "eco-u11-t2",
        title: "Cost & Revenue Analysis",
        content: {
          coreConcept: `
### Types of Costs
- **Total Cost (TC)**: Total Fixed Cost (TFC) + Total Variable Cost (TVC).
- **Average Cost (AC)**: TC / Units produced. **U-Shaped** curve.
- **Marginal Cost (MC)**: Extra cost of producing one more unit. MC intersects AC and AVC at their lowest points.

### Revenue
- **Total Revenue (TR)**: Price × Quantity.
- **Marginal Revenue (MR)**: Change in TR / Change in Quantity.
- **In Perfect Competition**: Price = AR = MR (Horizontal line).
          `
        }
      },
      {
        id: "eco-u11-t3",
        title: "Producer Equilibrium & Supply",
        content: {
          coreConcept: `
### Producer Equilibrium
A producer is in equilibrium when they maximize profits.
- **Conditions (MR-MC approach)**:
  1. $MR = MC$.
  2. $MC$ must be rising (MC cuts MR from below).

### Theory of Supply
- **Law of Supply**: Direct relationship between Price and Quantity Supplied ($P \\uparrow, S \\uparrow$).
- **Determinants**: Price, Input prices, Technology, Taxes, Firm's Goal.
          `
        }
      }
    ]
  },

  flashcards: [
    { id: "eco-u11-fc1", question: "What is the shape of the TFC curve?", answer: "Horizontal straight line parallel to the X-axis." },
    { id: "eco-u11-fc2", question: "Where does MC cut the AC curve?", answer: "At the minimum point of the Average Cost (AC) curve." },
    { id: "eco-u11-fc3", question: "Define Marginal Product (MP).", answer: "The addition to total product resultant from the employment of one more unit of the variable factor." },
    { id: "eco-u11-fc4", question: "Why is the short-run AC curve U-shaped?", answer: "Due to the Law of Variable Proportions (LVP)." },
    { id: "eco-u11-fc5", question: "What is the relation between AR and Price in perfect competition?", answer: "They are equal (AR = Price)." }
  ],

  questions: [
    {
      id: "eco-u11-q1",
      type: "mcq",
      question: "When TP is maximum, MP is:",
      options: ["Positive", "Negative", "Zero", "Increasing"],
      correct: 2,
      explanation: "Marginal Product (MP) is the rate of change of Total Product (TP). When TP reaches its maximum point, the rate of change is zero.",
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u11-q2",
      type: "mcq",
      question: "Law of Supply shows a relationship between price and quantity supplied which is:",
      options: ["Inverse", "Direct", "Proportional", "No relationship"],
      correct: 1,
      explanation: "Ceteris paribus, as price increases, supply also increases ($P \\uparrow \\Rightarrow S \\uparrow$).",
      examTags: ["CUET", "CBSE"]
    }
  ]
};
