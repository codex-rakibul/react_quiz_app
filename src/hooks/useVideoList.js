import { useEffect, useState } from "react";
import { getDatabase, orderByKey, query, ref, get, startAt, limitToFirst } from "firebase/database";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    //database related work
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey(), startAt(""+page),limitToFirst(8));
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const sanpshot = await get(videoQuery);
        setLoading(false);
        if (sanpshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(sanpshot.val())];
          });
        } else {
            setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,

  };
}
