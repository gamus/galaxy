// Sprite handling for game graphics

export interface SpriteOptions {
  url: string;
  width: number;
  height: number;
  map: { [key: string]: { x: number; y: number } };
}

export class Sprite {
  private image: HTMLImageElement;
  private width: number;
  private height: number;
  private map: { [key: string]: { x: number; y: number } };
  private times: number;

  constructor(options: SpriteOptions) {
    this.image = new Image();
    this.image.src = options.url;
    this.width = options.width;
    this.height = options.height;
    this.map = options.map;
    this.times = 1;
  }

  scale(times: number): void {
    this.times = times;
  }

  draw(step: string): void {
    const pos = this.map[step];
    const context = (window as any).context;
    
    context.save();
    context.scale(this.times, this.times);
    context.drawImage(
      this.image,
      pos.x, pos.y,
      this.width, this.height,
      0, 0,
      this.width, this.height
    );
    context.restore();
  }
}

// Make Sprite available globally for compatibility
(window as any).Sprite = Sprite;