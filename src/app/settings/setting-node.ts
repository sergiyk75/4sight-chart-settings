import { BaseNode } from './base-node';

class SettingNode<ValueType> extends BaseNode {
    type: string;
    value: ValueType;
}

export class NumberNode extends SettingNode<number> {
    min: number;
    max: number;
}

export class LookupNode extends SettingNode<string> {
    values: string[];
}

export class StringNode extends SettingNode<string> {
    regex: string;
}
