import 'jest-given-when-then';
import ChracterService from './CharacterService';



describe("Calculates stat modifier", () => {
  let stat: number;
  let modifier: number;

  describe("When stat is more than 10", () => {
    Given(() => { stat = 18; });
    When(() => { modifier = ChracterService.calculateStatModifier(stat); });
    Then(() => { expect(modifier).toBe(4) });
  });

  describe("When stat is 10", () => {
    Given(() => { stat = 10; });
    When(() => { modifier = ChracterService.calculateStatModifier(stat); });
    Then(() => { expect(modifier).toBe(0) });
  });

  describe("When stat less than 10", () => {
    Given(() => { stat = 8; });
    When(() => { modifier = ChracterService.calculateStatModifier(stat); });
    Then(() => { expect(modifier).toBe(-1) });
  });
  
});

describe("Format stat modifier", () => {
  let modifier: number;
  let format: string;

  describe("When stat is more than 0", () => {
    Given(() => { modifier = 4; });
    When(() => { format = ChracterService.formatStatModifier(modifier); });
    Then(() => { expect(format).toBe('+4') });
  });

  describe("When stat is 0", () => {
    Given(() => { modifier = 0; });
    When(() => { format = ChracterService.formatStatModifier(modifier); });
    Then(() => { expect(format).toBe('0') });
  });

  describe("When stat less than 0", () => {
    Given(() => { modifier = -2; });
    When(() => { format = ChracterService.formatStatModifier(modifier); });
    Then(() => { expect(format).toBe('-2') });
  });
  
});