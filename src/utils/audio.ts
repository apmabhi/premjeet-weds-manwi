// Wedding Audio Player
// Plays the uploaded traditional Indian wedding song: "Shagna Di Shab" / Shehnai celebration
// Path: /assets/aistudio/_256k__d1b3b009.mp3

class WeddingAudioPlayer {
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.7;
  private audioSrc: string = '/assets/aistudio/_256k__d1b3b009.mp3';
  private onStateChangeListeners: Array<(isPlaying: boolean) => void> = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    if (this.audioElement) return;

    this.audioElement = new Audio(this.audioSrc);
    this.audioElement.loop = true;
    this.audioElement.volume = this.volume;
    this.audioElement.preload = 'auto';

    this.audioElement.addEventListener('play', () => {
      this.isPlaying = true;
      this.notifyListeners();
    });

    this.audioElement.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notifyListeners();
    });

    this.audioElement.addEventListener('ended', () => {
      this.isPlaying = false;
      this.notifyListeners();
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Audio playback error, falling back or waiting for interaction', e);
    });
  }

  public subscribe(listener: (isPlaying: boolean) => void): () => void {
    this.onStateChangeListeners.push(listener);
    return () => {
      this.onStateChangeListeners = this.onStateChangeListeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners() {
    this.onStateChangeListeners.forEach((listener) => listener(this.isPlaying));
  }

  public async play(): Promise<boolean> {
    this.initAudio();
    if (!this.audioElement) return false;

    try {
      if (this.isMuted) {
        this.audioElement.muted = false;
        this.isMuted = false;
      }
      this.audioElement.volume = this.volume;
      await this.audioElement.play();
      this.isPlaying = true;
      this.notifyListeners();
      return true;
    } catch (err) {
      console.warn('Playback prevented by browser until user interaction:', err);
      return false;
    }
  }

  public pause() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.isPlaying = false;
      this.notifyListeners();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  public mute(muted: boolean) {
    this.isMuted = muted;
    if (this.audioElement) {
      this.audioElement.muted = muted;
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioPlayer();
