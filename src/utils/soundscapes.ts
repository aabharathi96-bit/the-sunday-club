/**
 * Cozy Web Audio Ambient Synthesizer
 * Generates relaxing soundscapes (Gentle Rain, Soft Fireplace, Morning Breeze)
 * using client-side Web Audio API without relying on external network audio files.
 */

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentMode: 'rain' | 'fireplace' | 'birds' = 'rain';
  private gainNode: GainNode | null = null;
  private activeNodes: (AudioNode | number)[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play(mode: 'rain' | 'fireplace' | 'birds' = 'rain', volume: number = 0.3) {
    this.stop();
    this.initContext();
    if (!this.ctx) return;

    this.currentMode = mode;
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    if (mode === 'rain') {
      this.createRainSound();
    } else if (mode === 'fireplace') {
      this.createFireplaceSound();
    } else {
      this.createBreezeSound();
    }

    this.isPlaying = true;
  }

  private createRainSound() {
    if (!this.ctx || !this.gainNode) return;

    // Pink noise generator for gentle rain
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to make it sound like rain outside a closed window
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(this.gainNode);
    whiteNoise.start();

    this.activeNodes.push(whiteNoise);
  }

  private createFireplaceSound() {
    if (!this.ctx || !this.gainNode) return;

    // Soft low rumble + subtle crackles
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Occasional crackle pops
      const isCrackle = Math.random() < 0.0006;
      const crackle = isCrackle ? (Math.random() - 0.5) * 0.8 : 0;
      const baseNoise = (Math.random() * 2 - 1) * 0.02;
      output[i] = baseNoise + crackle;
    }

    const source = this.ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);

    source.connect(filter);
    filter.connect(this.gainNode);
    source.start();

    this.activeNodes.push(source);
  }

  private createBreezeSound() {
    if (!this.ctx || !this.gainNode) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.03;
    }

    const source = this.ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    source.connect(filter);
    filter.connect(this.gainNode);
    source.start();

    this.activeNodes.push(source);
  }

  public setVolume(volume: number) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime);
    }
  }

  public stop() {
    this.activeNodes.forEach(node => {
      if (typeof node !== 'number') {
        try {
          (node as AudioScheduledSourceNode).stop();
          (node as AudioNode).disconnect();
        } catch {
          // ignore
        }
      }
    });
    this.activeNodes = [];
    this.isPlaying = false;
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      currentMode: this.currentMode
    };
  }
}

export const soundscapes = new SoundscapeEngine();
