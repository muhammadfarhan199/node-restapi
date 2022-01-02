import mockDB from './db/mockDB.js';
import recordsSchema from '../models/RecordsSchema.js'
import recordService from '../service/records.js'
import RequestModel from '../models/RequestModel';

beforeAll(async () => {
  await mockDB.connect();
});

beforeEach(async () => {
  await createRecords();
});

afterEach(async () => {
  await mockDB.clearDatabase();
});

afterAll(async () => {
  await mockDB.closeDatabase();
});

describe('records retrieval service', () => {

  it('should retrieve correct record date matces', async () => {

    const foundRecords = await recordService.getRecordsByFilter(new RequestModel(correctRequest));

    expect(foundRecords[0].key).toBe("testKey1");
  });

  it('should retrieve no records with wrong dates', async () => {

    const foundRecords = await recordService.getRecordsByFilter(new RequestModel(wrongRequest));

    expect(foundRecords).toEqual([]);
  });

});

const correctRequest = {
  startDate: '2016-01-01',
  endDate: '2016-02-01',
  minCount: '1',
  maxCount: '100'
};

const wrongRequest = {
  startDate: '2020-01-01',
  endDate: '2021-02-01',
  minCount: '1',
  maxCount: '100'
};

const recordsToAdd = [{
  key: 'testKey1',
  createdAt: new Date(2016, 0, 15),
  counts: [10, 20],
  value: 'test value'
},
{
  key: 'testKey2',
  createdAt: new Date(2017, 0, 1),
  counts: [10, 20],
  value: 'test value'
},
{
  key: 'testKey3',
  createdAt: new Date(2018, 0, 1),
  counts: [10, 20],
  value: 'test value'
}];


const createRecords = async () => {
  await recordsSchema.create(recordsToAdd);
};