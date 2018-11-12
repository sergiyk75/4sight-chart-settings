class BaseSetting<ValueType> {
    id: string;
    type: string;
    value: ValueType;
}

export class NumberSetting extends BaseSetting<number> {
    min: number;
    max: number;
}

export class LookupSetting extends BaseSetting<string> {
    values: string[];
}

export class StringString extends BaseSetting<string> {
    regex: string;
}
