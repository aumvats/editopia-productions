import React, { useState } from 'react';
import './ComparisonSection.css';

const ComparisonSection = () => {
  const [isPositive, setIsPositive] = useState(false);

  const toggleState = () => {
    setIsPositive(!isPositive);
  };

  const negativeItems = [
    { icon: '🔳', title: 'Generic Designs', description: 'Settling for uninspired templates, failing to differentiate your brand in a crowded market.' },
    { icon: '❌', title: 'Poor User Experience', description: 'Teams not working together well, making it hard to achieve common goals and tasks.' },
    { icon: '👁️', title: 'Low Visibility', description: 'Bad vibes at work make people unhappy, lowering how much work gets done.' },
    { icon: '😕', title: 'Limited Functionality', description: 'People doing the wrong jobs arent happy, and it makes the work not so good.' },
    { icon: '📅', title: 'Missed Deadlines', description: 'Work processes are done poorly, taking too much time and money due to inefficient methods.' },
    { icon: '⚠️', title: 'Inadequate Support', description: 'People argue a lot, making it tough for the team to stay together and work well.' },
  ];

  const positiveItems = [
    { icon: '✏️', title: 'Creative Expertise', description: 'Unique designs tailored to your brand, captivating users with innovative visuals.' },
    { icon: '🔄', title: 'Responsive Designs', description: 'Ensuring seamless experiences across all devices, maximizing user engagement and satisfaction.' },
    { icon: '🔍', title: 'SEO Optimization', description: 'Elevating your online presence with strategies that boost search engine rankings effectively.' },
    { icon: '</>', title: 'Custom Solutions', description: 'Crafting bespoke websites that meet your specific needs, enhancing functionality and user experience.' },
    { icon: '👍', title: 'Quick Turnaround', description: 'Meeting deadlines consistently, providing reliable services without compromising quality or efficiency.' },
    { icon: '✅', title: 'Exceptional Support', description: 'Dedicated assistance during and after project completion, ensuring client satisfaction and success.' },
  ];

  const items = isPositive ? positiveItems : negativeItems;

  
    return (
        <section className="comparison-section">
          <div className="header-container">
            <h2>
              When people
              <span className={isPositive ? 'positive' : 'negative'}>
                {isPositive ? 'do' : "don't"}
              </span>
              work with us.
            </h2>
            <button className="toggle-button" onClick={toggleState}>
              <div className={`slider ${isPositive ? 'active' : ''}`}></div>
            </button>
            <button className="cta-button">Let's build something</button>
          </div>
          <div className="items-grid">
            {items.map((item, index) => (
              <div key={index} className="item">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
};

export default ComparisonSection;