import { BaseNode } from './base-node';
import { NumberNode, StringNode, LookupNode } from './setting-node';

export class ComponentNode extends BaseNode {
    components: ComponentNode[];
    settings: (NumberNode | StringNode | LookupNode)[];
}
