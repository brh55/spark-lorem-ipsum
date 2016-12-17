const expect = require('chai').expect;
const rewire = require('rewire');
const generate = rewire('../dist/commands/generate');

const trigger1 = 'make 10 paragraphs';
const trigger2 = 'generate 25 sentences';
const trigger3 = 'create 500 words';
const fakeTrigger = 'hello world';

describe('Generate Test Suite', function SaveTest() {
    it('Should get the unit', (done) => {
        const getUnit = generate.__get__('getUnit');

        expect(getUnit(trigger1)).to.equal('paragraphs');
        expect(getUnit(trigger2)).to.equal('sentences');
        expect(getUnit(trigger3)).to.equal('words');
        expect(getUnit(fakeTrigger)).to.be.a.null;

        done();
    });

    it('Should get the count', (done) => {
        const getCount = generate.__get__('getCount');

        expect(getCount(trigger1)).to.equal(10);
        expect(getCount(trigger2)).to.equal(25);
        expect(getCount(trigger3)).to.equal(500);
        expect(getCount(fakeTrigger)).to.be.a.null;

        done();
    });

    it('Should create ipsum with phrase', (done) => {
        // Lightly tested
        const createIpsum = generate.__get__('createIpsum');

        const ipsum = createIpsum('make 10 paragraphs');
        expect(ipsum).to.be.a.string;
        expect(ipsum.length > 100).to.be.true;
        done();
    });
});
