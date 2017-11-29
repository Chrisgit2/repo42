import {TestDataItem} from './TestDataItem'
import {BaseEntity} from './BaseEntity'
export class TestData extends BaseEntity{
    public data: string;
    public number: Number;
    public floatnumber: Number;
    public Items: TestDataItem;
}