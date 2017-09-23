import * as opn from 'opn';
import { SUPPORT } from './constants';

export class Tests {

    private static readonly TESTS = SUPPORT + '*&Tests=';

    public requirements(): void {
        opn(Tests.TESTS + 'Requirements');
    }

    public displayDriverTest(): void {
        opn(Tests.TESTS + 'DisplayDriver');
    }

    public directXTest(): void {
        opn(Tests.TESTS + 'DirectX');
    }

    public connectionAndPortsTest(): void {
        opn(Tests.TESTS + 'Ports');
    }

    public runningTasksTest(): void {
        opn(Tests.TESTS + 'RunningTasks');
    }

    public loadedModules(): void {
        opn(Tests.TESTS + 'LoadedModules');
    }

    public services(): void {
        opn(Tests.TESTS + 'Services');
    }

    public lsp(): void {
        opn(Tests.TESTS + 'LSP');
    }

    public codes(): void {
        opn(Tests.TESTS + 'Codec');
    }
}
