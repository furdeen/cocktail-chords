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
    <div className="drink-music__container">
      <iframe
        className="deezer__iframe"
        title="deezer-widget"
        src={deezerWidget}
        width="100%"
        frameBorder="0"
        allow="encrypted-media; clipboard-write; accelerometer; gyroscope"
      ></iframe>
    </div>
  );
};

export default DeezerWidget;
