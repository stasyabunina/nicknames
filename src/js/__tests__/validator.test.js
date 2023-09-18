import Validator from '../validator';

test('testing correct nickname', () => {
  const validate = new Validator('bear5_32hf');
  expect(validate.validateUsername()).toBeTruthy();
});

test('testing wrong nickname', () => {
  const validate = new Validator('bear55_');
  expect(() => { validate.validateUsername(); }).toThrow(new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире'));
});
