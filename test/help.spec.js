const expect = require('chai').expect;
const rewire = require('rewire');
const help = rewire('../dist/commands/help');

describe('Help Test Suite', function SaveTest() {
    it('Should prompt examples', (done) => {
        const prompt = help.__get__('prompt');

        expect(prompt({displayName: 'Ronald'})).to.include('generate');
        expect(prompt({displayName: 'Ronald'})).to.include('Ronald');
        done();
    });
});
