import { NumberSetting, StringString, LookupSetting } from '../component-settings/component-setting';

export class ComponentItem {
    id: string;
    name: string;
    components: ComponentItem[];
    settings: (NumberSetting | StringString | LookupSetting)[];
}
