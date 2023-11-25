import { User } from "./Authorization"

interface CustomFieldRequest {
    id: string,
    value: number | string
}

export interface CreateTaskRequest {
    name: string,
    description?: string,
    assignees?: number[],
    tags?: string[],
    status?: string,
    priority?: number | null,
    due_date?: number,
    due_date_time?: boolean,
    time_estimate?: number,
    start_date?: number,
    start_date_time?: boolean,
    notify_all?: boolean,
    parent?: string | null,
    links_to?: string | null,
    check_required_custom_fields?: boolean,
    custom_fields?: CustomFieldRequest[],
    custom_item_id?: number
}

interface Status {
    status: string,
    color: string,
    orderindex: number,
    type: string
}

interface TypeConfig {
    single_user?: boolean,
    include_groups?: boolean,
    include_guests?: boolean,
    include_team_members?: boolean,
}

interface CustomValue {
    id?: number,
    username?: string,
    email?: string,
    color?: string,
    initials?: string,
    profilePicture?: string | null,
}

interface CustomValue1 {
    id: number,
    username: string,
    email: string,
    color: string,
    initials: string,
    profilePicture: string | null,
}

interface CustomValue2 {
    value: string
}

interface CustomFieldResponse {
    id: string,
    name: string,
    type: string,
    type_config: TypeConfig,
    date_created: string,
    hide_from_guests: boolean,
    value: CustomValue | CustomValue1 | CustomValue2
    required: boolean,
}

interface List {
    id: string
}

interface Space {
    id: string
}

interface Folder {
    id: string
}

export interface CreateTaskResponse {
    id?: string,
    custom_id?: string | null,
    custom_item_id?: number | null,
    name?: string,
    text_content?: string,
    description?: string,
    status?: Status,
    orderindex?: string,
    date_created?: string,
    date_updated?: string,
    date_closed?: string | null,
    creator?: User,
    assignees?: string[],
    checklists?: string[],
    tags?: string[],
    parent?: string | null,
    priority?: string | null,
    due_date?: string | null,
    start_date?: string | null,
    time_estimate?: string | null,
    custom_fields?: CustomFieldResponse,
    list?: List,
    folder?: Folder,
    space?: Space,
    url?: string
}
