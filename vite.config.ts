import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'


// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react(), dts({ include: ['src'] })],
    build: {
        copyPublicDir: false,
        lib: {
            name: "main",
            fileName: "main",
            entry: resolve(__dirname, 'src/main.tsx'),
            formats: ['es'],
        },
        rollupOptions:{
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})
