import { AxiosResponse } from "axios";
import client from "./client";

interface Operation {
    days: number;
    open: Date;
    duration: Date;
    is_close: boolean;
}

interface OperationTime {
    operations: Array<Operation>
}

interface Store {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    tel: string;
    operation_time: OperationTime;
    location_geo: string;
    tag: Array<string>;
    results: Array<String>;
}

export default {
    getStore(id: number): Promise<AxiosResponse<Store>> {
        if (id != 0) {
            const endpoint = `/stores/${id}/`;
            return client.get<Store>(endpoint);
        } else {
            const endpoint = `/stores/`;
            return client.get<Store>(endpoint);
        }
    }
}