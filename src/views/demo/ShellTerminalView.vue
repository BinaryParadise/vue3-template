<template>
  <div>
    <div ref="terminal" />
  </div>
</template>

<script setup lang="ts">
import 'xterm/css/xterm.css';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client';

const _term = ref();
const socketUri = 'http://192.86.56.1';
const terminal = ref<HTMLElement>();

function initTerm() {
  const term = new Terminal({
    cursorBlink: true,
    fontSize: 14,
    fontFamily: 'monospace',
    theme: {
      foreground: '#ffffff',
      background: '#000000',
      cursor: 'rgba(255, 255, 255, 0.5)'
    }
  });
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(terminal.value!);
  fitAddon.fit();
  term.focus();
  term.write('Connecting to ' + socketUri + '...');
  _term.value = term;

  const socket = io(socketUri, {
    transports: ['websocket'], // 指定传输方式，如WebSocket
    path: '/bash.io',
    autoConnect: true, // 是否自动连接
    reconnection: true, // 是否自动重新连接
    reconnectionAttempts: 5, // 重新连接尝试次数
    reconnectionDelay: 1000 // 重新连接延迟时间（毫秒）
    // 其他可选参数...
  });

  socket.on('open', () => {
    _term.value!.write('Connected!\n');
  });

  socket.on('error', (data: string) => {
    _term.value!.write(data);
  });
}

onMounted(() => {
  initTerm();
});
</script>
