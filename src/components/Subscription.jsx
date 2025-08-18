import React, { useState, useEffect } from 'react';

const Subscription = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cards = [
    {
      id: 1,
      title: '3 Months',
      price: '₹500',
      features: [
        'Access to all audiobooks',
        'Ad-free listening',
        'Download up to 10 titles',
        'Cancel anytime'
      ],
      popular: false
    },
    {
      id: 2,
      title: '6 Months',
      price: '₹1000',
      features: [
        'Everything in 3 Months',
        'Download up to 30 titles',
        'Early access to new releases',
        'Save 17% vs monthly'
      ],
      popular: true
    },
    {
      id: 3,
      title: '1 Year',
      price: '₹1500',
      features: [
        'Everything in 6 Months',
        'Unlimited downloads',
        'Exclusive content',
        'Save 25% vs monthly',
        'Free audiobook credit'
      ],
      popular: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    const positions = {
      transform: '',
      zIndex: 0,
      opacity: 1
    };

    if (position === 0) {
      positions.transform = 'translateX(0) scale(1)';
      positions.zIndex = 10;
    } else if (position === -1 || (activeIndex === 0 && index === cards.length - 1)) {
      positions.transform = 'translateX(-80%) scale(0.9)';
      positions.zIndex = 5;
      positions.opacity = 0.7;
    } else if (position === 1 || (activeIndex === cards.length - 1 && index === 0)) {
      positions.transform = 'translateX(80%) scale(0.9)';
      positions.zIndex = 5;
      positions.opacity = 0.7;
    } else {
      positions.transform = 'translateX(0) scale(0.8)';
      positions.zIndex = 1;
      positions.opacity = 0;
    }

    return positions;
  };

  return (
    <div className="relative">
     
      <section className="py-16 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-center text-amber-800 mb-12 max-w-2xl mx-auto">
          Get unlimited access to our entire library of audiobooks and exclusive content
        </p>

        <div className="relative h-[500px] w-full max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const position = getCardStyle(index);
            
            return (
              <div
                key={card.id}
                className={`absolute w-full max-w-md p-6 rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer ${
                  card.popular ? 'bg-gradient-to-br from-amber-500 to-amber-600' : 'bg-white'
                }`}
                style={{
                  ...position,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) ${position.transform}`,
                  zIndex: position.zIndex,
                  opacity: position.opacity,
                }}
                onClick={() => setActiveIndex(index)}
              >
                {card.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-900 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    card.popular ? 'text-white' : 'text-amber-900'
                  }`}>
                    {card.title}
                  </h3>
                  <div className="mb-6">
                    <span className={`text-5xl font-extrabold ${
                      card.popular ? 'text-white' : 'text-amber-700'
                    }`}>
                      {card.price}
                    </span>
                    <span className={`text-lg ${
                      card.popular ? 'text-amber-100' : 'text-amber-600'
                    }`}>
                      /{card.title.split(' ')[1].toLowerCase()}
                    </span>
                  </div>
                  <ul className="mb-8 space-y-3 text-left">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                            card.popular ? 'text-amber-200' : 'text-amber-500'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={card.popular ? 'text-amber-50' : 'text-amber-800'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      card.popular
                        ? 'bg-white text-amber-700 hover:bg-amber-50'
                        : 'bg-amber-600 text-white hover:bg-amber-700'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>
    </div>
  );
};

export default Subscription;
