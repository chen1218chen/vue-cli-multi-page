import Mock from 'mockjs';

const Infos = [];

for (let i = 0; i < 50; i++) {
  Infos.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    dateTime: Mock.Random.datetime(),
    sex: Mock.Random.integer(0, 1),
    picturePath: Mock.Random.url('http', 'chen1218chen.com')
  }));
}

export  { Infos };
