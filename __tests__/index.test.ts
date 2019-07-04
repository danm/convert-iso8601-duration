import convert from '../lib';

describe('converter', () => {
  it('should translate just hours', () => {
    expect(convert('PT2H')).toEqual(432000);
  });
  it('should translate just minutes', () => {
    expect(convert('PT2M')).toEqual(120);
  });
  it('should translate just seconds', () => {
    expect(convert('PT13S')).toEqual(13);
  });
  it('should translate hours mins seconds', () => {
    expect(convert('PT1H20M13S')).toEqual(217213);
  });
  it('should translate mins seconds', () => {
    expect(convert('PT20M13S')).toEqual(1213);
  });
  it('should return 0 for invalid', () => {
    expect(convert('sdsfsd')).toEqual(0);
  });

});