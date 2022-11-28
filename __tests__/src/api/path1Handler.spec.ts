import {processPath1Request} from '../../../src/api/path1Handler';

describe("processPath1Request()", () => {
  it("Should return Hello World !", async() => {
    const path1Request = {};
    const path1Response = await processPath1Request(path1Request);

    expect(path1Response).toEqual("Hello World !");
  });
});
