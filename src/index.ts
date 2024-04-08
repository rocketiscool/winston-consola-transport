import Transport from 'winston-transport'
import consola from 'consola'

export class ConsolaTransport extends Transport {
    log(info: any, callback: () => void): void {
        setImmediate(() => {
            this.emit('logged', info);
        });

        const { level, message } = info;

        switch (level) {
            case 'info':
                consola.info(message);
                break;
            case 'warn':
                consola.warn(message);
                break;
            case 'error':
                consola.error(message);
                break;
            case 'debug':
                consola.debug(message);
                break;
            default:
                console.log(`${level.toUpperCase()}: ${message}`);
        }

        if (callback) {
            callback();
        }
    }
}
