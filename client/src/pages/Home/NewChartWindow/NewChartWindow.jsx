import React, { useEffect, useRef } from 'react';
import DashboardActions from '../../../components/DashboardActions';

const NewChartWindow = () => {
  const container = useRef(null);
  const scriptAppended = useRef(false);

  useEffect(() => {
    if (!scriptAppended.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
      scriptAppended.current = true;
    }
  }, []);

  return (
    <div style={{ height: "80vh", display: "flex", flexDirection: "column" }}>
      <DashboardActions Title="New Chart Window" action="Add"/>
      <div className="tradingview-widget-container" ref={container} style={{ flex: 1 }}>
        <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
      </div>
    </div>
  );
}

export default NewChartWindow;
