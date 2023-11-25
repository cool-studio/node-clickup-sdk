export interface TaskAddCommentRequest {
    comment_text: string,
    assignee: number | null,
    notify_all: boolean
}

export interface TaskAddCommentResponse {
    id: string,
    hist_id: string,
    date: number
}
