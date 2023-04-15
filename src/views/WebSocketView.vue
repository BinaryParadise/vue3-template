<template>
    <div>
        <el-container>
            <el-select size="mini" v-model="bintype">
                <el-option value="blob" label="blob"></el-option>
                <el-option value="arraybuffer" label="arraybuffer"></el-option>
            </el-select>
            <el-input size="mini" v-model="host" placeholder="请输入地址" style="margin-left: 8px;width: 500px;">
                <div slot="prepend">
                    <div><span>ws://</span>
                    </div>
                </div>
                <el-button slot="append" type="primary" v-on:click="connect">{{ running ? '断开' : '连接' }}</el-button>
            </el-input>
        </el-container>
        <el-container style="margin-top:16px;">
            <el-input type="textarea" v-model="msg" style="width: 600px;"></el-input>
            <el-button size="mini" type="primary" style="margin-left: 12px;" v-on:click="sendMsg">发送</el-button>
        </el-container>
    </div>
</template>

<script>

const GUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


export default {
    name: "WebSocketView",
    data: function () {
        return {
            host: '',
            clientid: "",
            bintype: "arraybuffer",
            running: false,
            msg: '',
            wsock: {},
            getWSUrl: function () {
                return 'ws://' + this.host + "?clientid=" + this.clientid;
            }
        };
    },
    created: function () {
        this.host = localStorage.getItem("wsut_host");
        if (localStorage.getItem("wsut_cid") == undefined) {
            localStorage.setItem("wsut_cid", GUID());
        }
        this.clientid = localStorage.getItem("wsut_cid");
    },
    methods: {
        connect: function () {
            if (this.running) {
                this.wsock.close();
                return;
            }
            localStorage.setItem("wsut_host", this.host);
            var obj = this;
            var ws = new WebSocket(obj.getWSUrl());
            if (obj.bintype == "arraybuffer") {
                ws.binaryType = obj.bintype;
            }
            ws.onopen = function () {
                console.log('onopen');
                obj.running = true;
            };
            ws.onmessage = function (result) {
                if (result.data instanceof ArrayBuffer) {
                    var decoder = new TextDecoder("utf-8");
                    var obj = JSON.parse(decoder.decode(result.data));
                    console.log(obj);
                }
            };
            ws.onerror = function (e) {
                console.error(e);
            };
            ws.onclose = function () {
                obj.running = false;
            };
            obj.wsock = ws;
        },
        send: function (obj) {
            var encoder = new TextEncoder();
            this.wsock.send(encoder.encode(JSON.stringify(obj)))
        },
        sendMsg: function () {
            this.send(JSON.parse(this.msg));
        }
    }
};
</script>