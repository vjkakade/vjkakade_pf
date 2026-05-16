'use client';

// A lightweight utility to generate synthetic UI sounds using Web Audio API
// This avoids needing heavy .mp3 files and ensures zero-latency playback

let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (typeof window === 'undefined') return;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const playClickSound = () => {
  if (typeof window === 'undefined') return;
  initAudio();
  if (!audioCtx) return;

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  // A short, high-pitched mechanical "click"
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);

  // Keep volume very subtle
  gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.05);
};

export const playPopSound = () => {
  if (typeof window === 'undefined') return;
  initAudio();
  if (!audioCtx) return;

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  // A soft, bubbling "pop" for opening images
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);

  // Keep volume very subtle
  gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.1);
};
