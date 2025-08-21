import { useState, useEffect } from "react";

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-gradient text-promo-foreground py-3 px-4 text-center sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="font-bold text-lg">PROMO 80% OFF ACABA EM:</span>
          <div className="flex gap-2">
            <div className="countdown-box">
              <div className="text-xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-xs">DIAS</div>
            </div>
            <div className="countdown-box">
              <div className="text-xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs">HORAS</div>
            </div>
            <div className="countdown-box">
              <div className="text-xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs">MIN</div>
            </div>
            <div className="countdown-box">
              <div className="text-xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs">SEG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;