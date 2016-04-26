// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import UserModule from './_ng';
import UserFactory from './user.factory';
import test from './user.test';

describe('User', ()=>{
  it('should run this test', ()=> {
    expect(4).toEqual(4);
  });

  it('should import properly', function() {
    expect(test.hello).toEqual('world');
  });
});
