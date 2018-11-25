import { NumberSetting, StringSetting, LookupSetting } from './component-setting';

export class ComponentItem {
    id: string;
    name: string;
    components: ComponentItem[];
    settings: (NumberSetting | StringSetting | LookupSetting)[];
}
