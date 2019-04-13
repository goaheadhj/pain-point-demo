export class Rect {
  constructor(
    public left: number = 0,
    public top: number = 0,
    public width: number = 0,
    public height: number = 0,
  ) {
  }

  get bottom(): number {
    return this.top + this.height;
  }

  get right(): number {
    return this.left + this.width;
  }

  get yCenter(): number {
    return this.top + this.height / 2;
  }
}
