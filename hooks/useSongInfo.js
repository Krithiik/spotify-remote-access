import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify";

function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);
  useEffect(() => {
    const fetchSongInfo = async () => {
      try {
        if (currentTrackId) {
          const trackInfo = await fetch(
            `https://api.spotify.com/v1/tracks/${currentTrackId}`,
            {
              headers: {
                Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
              },
            }
          ).then((res) => res.json());
          setSongInfo(trackInfo);
        }
      } catch (err) {
        alert(err);
      }
    };
    fetchSongInfo();
  }, [currentTrackId, spotifyApi]);
  return songInfo;
}

export default useSongInfo;
