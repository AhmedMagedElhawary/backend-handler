import request from 'supertest';
import qs from 'qs';
import { processPath1Request } from '../../../src/api/path1Handler';
import app from '../../../src/app';
import { AppError, ErrorCodes } from '../../../src/framework/appError';

const agent = request.agent(app);

describe('path1Handler()', () => {
  it('should return status 401 if no key was passed', async () => {
    const path1Request = {},
      response = await agent.get('/path1').query(qs.stringify(path1Request));

    expect(response.status).toBe(ErrorCodes.UNAUTHORIZED);
  });

  it('should return status 200 if key was passed', async () => {
    const path1Request = {},
      response = await agent
        .get('/path1')
        .set('x-api-key', 'testAPIKey')
        .query(qs.stringify(path1Request));

    expect(response.status).toBe(200);
  });
});

describe('processPath1Request()', () => {
  it('Should return Hello World !', async () => {
    const path1Request = {},
      path1Response = await processPath1Request(path1Request);

    expect(path1Response).toEqual('Hello World !');
  });
});
