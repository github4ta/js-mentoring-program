const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');
const {
    printDataCallback,
    printDataPromise,
    printDataAsyncAwait,
    handleErrorCallback,
    handlePromiseError,
    handleAsyncAwaitError
} = require('../async.js');

describe('callback', () => {
    it('should print data', () => {
        const consoleLogSpy = sinon.spy(console, 'log');
        printDataCallback();
        consoleLogSpy.restore();
        const calls = consoleLogSpy.getCalls().map(call => call.args[0]);
        expect(calls[0]).to.equal('this is data that be accessible via callback function');
    });

    it('should handle error', () => {
        expect(handleErrorCallback).to.throw('Intercepted Error');
    });
});

describe('promise', () => {
    it('should print data', async () => {
        const consoleLogSpy = sinon.spy(console, 'log');
        await printDataPromise();
        consoleLogSpy.restore();
        const calls = consoleLogSpy.getCalls().map(call => call.args[0]);
        expect(calls[0]).to.equal('this is data that be accessible via promise');
    });

    it('should handle error', () => {
        try {
            handlePromiseError();
        } catch (e) {
            expect(e.message).to.equal('Intercepted Error');
        }
    });
});

describe('async/await', () => {
    it('should print data', async () => {
        const consoleLogSpy = sinon.spy(console, 'log');
        await printDataAsyncAwait();
        consoleLogSpy.restore();
        const calls = consoleLogSpy.getCalls().map(call => call.args[0]);
        expect(calls[0]).to.equal('this is data that be accessible via promise');
    });

    it('should handle error', () => {
        return handleAsyncAwaitError().catch(err => {
            expect(err.message).to.equal('Intercepted Error');
        });
    });
});
