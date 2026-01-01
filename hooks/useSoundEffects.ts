import { useCallback } from 'react';

// Note: In a real production app, ensure these files exist in /public/sounds/
// For this demo, we assume the files are present or the browser will handle 404s gracefully without crashing.

export const useSoundEffects = () => {
  
  const playSound = useCallback((fileName: string, volume: number = 0.5) => {
    try {
      const audio = new Audio(`/sounds/${fileName}`);
      audio.volume = volume;
      
      // Reset time to allow rapid re-playing
      audio.currentTime = 0;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented or file not found.
          // We silently catch this to prevent console spam in dev if assets are missing.
          console.warn(`Sound effect '${fileName}' failed to play:`, error);
        });
      }
    } catch (e) {
      console.error("Audio initialization failed", e);
    }
  }, []);

  const playPageTurn = useCallback(() => {
    // Randomize slightly pitch or select between multiple samples for realism if available
    playSound('page-flip.mp3', 0.4);
  }, [playSound]);

  const playMagicSuccess = useCallback(() => {
    playSound('magic-chime.mp3', 0.6);
  }, [playSound]);

  const playSoftClick = useCallback(() => {
    playSound('soft-click.mp3', 0.3);
  }, [playSound]);

  return {
    playPageTurn,
    playMagicSuccess,
    playSoftClick
  };
};