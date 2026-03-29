import React, { useCallback, useEffect, useRef, useState } from 'react';
import useT from '../useT';

const CLIP_START = 13;
const CLIP_END = 50;
const AUDIO_SRC = `${process.env.PUBLIC_URL || ''}/audio.mp3`;

const BackgroundMusic = () => {
  const t = useT();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const pauseMusic = useCallback(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const playMusic = useCallback(async () => {
    if (!audioRef.current) {
      return false;
    }

    try {
      if (audioRef.current.currentTime < CLIP_START || audioRef.current.currentTime >= CLIP_END) {
        audioRef.current.currentTime = CLIP_START;
      }

      await audioRef.current.play();
      setIsPlaying(true);
      return true;
    } catch {
      setIsPlaying(false);
      return false;
    }
  }, []);

  const toggleMusic = useCallback(async () => {
    if (isPlaying) {
      pauseMusic();
      return;
    }

    await playMusic();
  }, [isPlaying, pauseMusic, playMusic]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.volume = 0.75;

    const handleLoadedMetadata = () => {
      audio.currentTime = CLIP_START;
      setIsReady(true);
    };

    const handleTimeUpdate = () => {
      if (audio.currentTime >= CLIP_END) {
        audio.currentTime = CLIP_START;

        if (isPlayingRef.current) {
          audio.play().catch(() => {
            setIsPlaying(false);
          });
        }
      }
    };

    const handleEnded = () => {
      audio.currentTime = CLIP_START;

      if (isPlayingRef.current) {
        audio.play().catch(() => {
          setIsPlaying(false);
        });
      }
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);
    audio.src = AUDIO_SRC;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      audio.src = '';
    };
  }, []);

  return (
    <button
      type="button"
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      aria-label={isPlaying ? t.musicPauseLabel : t.musicPlayLabel}
      title={isPlaying ? t.musicPauseLabel : t.musicPlayLabel}
      disabled={!isReady}
    >
      <span className="music-toggle-icon" aria-hidden="true">{isPlaying ? '🎶' : '🔔'}</span>
      <span className="music-toggle-text">
        {!isReady ? t.musicLoading : isPlaying ? t.musicOn : t.musicOff}
      </span>
    </button>
  );
};

export default BackgroundMusic;