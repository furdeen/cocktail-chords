import { useEffect, useState } from "react";

type DeezerWidgetProps = {
  trackId: string;
};

const DeezerWidget: React.FC<DeezerWidgetProps> = ({ trackId }) => {
  const [deezerWidget, setDeezerWidget] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (trackId) {
      setDeezerWidget(`https://widget.deezer.com/widget/dark/track/${trackId}`);
    } else {
      // play Daft Punk if nothing else is available
      setDeezerWidget(`https://widget.deezer.com/widget/dark/track/3135556`);
    }
  }, [trackId]);

  return (
    <div className="daily-mix__container">
      <iframe
        title="deezer-widget"
        src={deezerWidget}
        width="100%"
        height="300"
        allow="encrypted-media; clipboard-write"
      ></iframe>
    </div>
  );
};

export default DeezerWidget;