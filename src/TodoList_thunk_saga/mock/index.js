const Mock = require('mockjs');

Mock.mock('/api/test', 'get', {
        'list|4': ['pack', 'dell', 'bill']
    }
)