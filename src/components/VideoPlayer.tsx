import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
};

export const VideoPlayer = ({ src, isPlaying }: Props) => {
  // cria um ref e passa a prop <HtmlVideoElement> (TS)
  const videoTag = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);

  function mudar(){
    setPlaying(!playing)
  }

  useEffect(() => {
    // useEffect para se o isPlaying for true da play
    if (isPlaying) {
      videoTag.current?.play();
      // se for false pause
    } else {
      videoTag.current?.pause();
    }
    // CLEAN UP
    return(
      console.log('oi')
    )
  });

  return (
    <div>
      <p className="p-3 m-3">{playing ? "RODANDO" : "PAUSADO"} </p>
      <hr />
      <button
        className="p-3 m-3 border border-white rounded-md bg-blue-400"
        onClick={mudar}
      >
        PLAY/PAUSE
      </button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      ></VideoPlayer>

      <div>
        {/*  a tag video é padrão HTML para videos */}
        {/*  loop para ficar sempre rodando playsInline para insta começar */}
        <video src={src} ref={videoTag} loop playsInline></video>
      </div>
    </div>
  );
};
