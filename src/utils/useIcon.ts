import { HomeFilled, Operation, Document } from "@element-plus/icons-vue";

export function useIcon(key?: string) {
    switch (key) {
        case "HomeFilled":
            return HomeFilled;
        case "Operation":
            return Operation;
        default:
            return Document;
    }
}